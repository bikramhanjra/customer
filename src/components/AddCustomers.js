import { useNavigate } from "react-router-dom";
import { useForm,} from "react-hook-form";

export default function AddCustomers({handleForm}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate()
    
  const onSubmit = (data) => {
    handleForm(data)
    navigate("/CustomersTable")
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="container position-relative p-3 border border-black my-5"
          style={{ width: "35vw", height: "70vh" }}
        >
          <h2 className="text-center mt-5">Add New Customer</h2>
          <div className="row g-3 mt-5 px-5">
            <div className="col">
              <input {...register("firstName" , {required: true})}  type="text" placeholder="firstname" />
              {errors.firstName && <span>FirstName is required</span>}
            </div>
            <div className="col">
              <input {...register("lastName", {required: true})} type="text" placeholder="lastname" />
              {errors.lastName && <span>LastName is required</span>}
            </div>
          </div>

          <div className="row g-3 mt-5 px-5">
            <div className="col">
              <input {...register("email", {required: true})} type="email" placeholder="email" />
              {errors.email && <span>email is required</span>}
            </div>
            <div className="col">
              <input {...register("password", {required: true})} type="password" placeholder="password" />
              {errors.password && <span>Password is required</span>}
            </div>
          </div>

          <div className="row g-3 mt-5 px-5">
            <div className="col">
              <input {...register("address", {required: true})} type="text" placeholder="address" />
              {errors.address && <span>Address is required</span>}
            </div>
            <div className="col">
              <select id="status" {...register("status", {required: true})}>
                 <option value="">status</option>
                <option value="active">Active</option>
                <option value="inActive">InActive</option>
              </select>
              {errors.status && <span>Status is required</span>}
            </div>
          </div>

          <div className="row g-3 mt-4 px-5 ">
            <div className="col">
                <input type="submit"/>
            </div>
          </div>
        </div>
      </form>
     
    </>
  );
}
