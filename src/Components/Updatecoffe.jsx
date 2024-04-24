import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Updatecoffe = () => {
    const coffee=useLoaderData();
    const {_id,name,quantity,supplier,teste,category,details,photo}=coffee;
    const handleupdate=event=>{
        event.preventDefault();
        const form=event.target;
        const name = form.name.value;
        const  quantity= form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffe ={name,quantity,supplier,teste,category,details,photo};
        console.log(updateCoffe);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffe)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
            
            })
        }
      
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-2xl font-extrabold">Add a Coffee</h1>
            <form onSubmit={handleupdate}>
                {/* name and quantity */}
                <div className="md:flex gap-3 mb-4">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={name} name="name"  placeholder="Coffe name" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={quantity} name="quantity"  placeholder="Available Quantity" className=" input w-full input-bordered"/>
                        </label>
                    </div>

                </div>
                {/* test */}
                <div className="md:flex gap-3 mb-4">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Supplier Name</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={supplier} name="supplier"  placeholder="Supplier name" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Teste</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={teste} name="teste" placeholder="Teste" className=" input w-full input-bordered"/>
                        </label>
                    </div>

                </div>
                {/* catagory and details */}
                <div className="md:flex gap-3 mb-4">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={category} name="category"  placeholder="Category" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={details} name="details" placeholder="Details" className=" input w-full input-bordered"/>
                        </label>
                    </div>

                </div>
                {/* photo url */}
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo </span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    {/* BTN */}
                    <input type="submit" value="Update Coffee" className="btn btn-block bg-purple-500 text-white" />

        
            </form>
        </div>
        </div>
    );
};

export default Updatecoffe;