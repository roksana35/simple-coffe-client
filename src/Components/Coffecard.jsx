import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffecard = ({coffee}) => {
    console.log(coffee)
    const {_id,name,quantity,supplier,teste,category,details,photo}=coffee;
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success" });

                }
            })
    
              
             
            }
          });
    }


    return (
        <div className="card card-side bg-base-100 space-x-4 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="flex justify-between pr-5 w-full space-y-3">
    
    <div>
    <h2 className="card-title">{name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{teste}</p>
    </div>
    <div className="flex flex-col items-center justify-center">
        <button className="btn w-16">View</button>
        <Link to='/updatecoffee'><button  className="btn w-16">Edit</button></Link>
        <button onClick={()=>handleDelete(_id)} className="btn w-16 bg-">X</button>

        </div>
      
    </div>
  </div>

    );
};

export default Coffecard;