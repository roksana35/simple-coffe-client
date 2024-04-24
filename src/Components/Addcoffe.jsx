import Swal from 'sweetalert2'

const Addcoffe = () => {
    const handleCoffee=event=>{
        event.preventDefault();
        const form=event.target;
        const name = form.name.value;
        const  quantity= form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffe ={name,quantity,supplier,teste,category,details,photo};
        console.log(newCoffe);
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffe)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Success',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-2xl font-extrabold">Add a Coffee</h1>
            <form onSubmit={handleCoffee}>
                {/* name and quantity */}
                <div className="md:flex gap-3 mb-4">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" name="name"  placeholder="Coffe name" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" name="quantity"  placeholder="Available Quantity" className=" input w-full input-bordered"/>
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
                            <input type="text" name="supplier"  placeholder="Supplier name" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Teste</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" name="teste" placeholder="Teste" className=" input w-full input-bordered"/>
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
                            <input type="text" name="category"  placeholder="Category" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" name="details" placeholder="Details" className=" input w-full input-bordered"/>
                        </label>
                    </div>

                </div>
                {/* photo url */}
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo </span>
                        </label>
                        <label  className="input-ghost">
                            <input type="text" name="photo" placeholder="Photo URL" className=" input w-full input-bordered"/>
                        </label>
                    </div>
                    {/* BTN */}
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-purple-500 text-white" />

        
            </form>
        </div>
    );
};

export default Addcoffe;