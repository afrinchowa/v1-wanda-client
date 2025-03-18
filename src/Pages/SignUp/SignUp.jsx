import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form sign up", email, password, name);
    createUser(email, password)
      .then((result) => {
        console.log('user created at fb',result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email ,createdAt};
        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
                console.log("user created to db");
            }
           
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
            
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="name"
                  className="input"
                  placeholder="Name"
                  name="name"
                />
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
           
                <div>
                  <p >Already sign up? <span><a href="./login" className="text-blue-700">Login</a></span></p>
                </div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
