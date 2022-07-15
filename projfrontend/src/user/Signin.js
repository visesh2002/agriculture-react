import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Base from "../core/Base";
import { signin, authenticate, isAuthenticated} from "../auth/helper";


const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "ten@hitesh.com",
    password: "12345",
    error: "",
    success: false,
    loading: false,                              //this is gonna make user move to another page
    didRedirect: false,                          
  });
  const { email, password,loading } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSumit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });     //loading is true,when somebody clicks on submit we might want to disable the submit button as well so that data can process
    // const {email, password} = user;
    signin({ email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.token) {
          //let sessionToken = data.token;
          //authenticate(sessionToken, () => {
          authenticate(data, () => {                //If the data has token then entire data is passed which includes token as well as user info
            console.log("TOKKEN ADDED");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {                                             //If we didn't receive the token 
          setValues({
            ...values,
            loading: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

 


  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                name="email"
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">password</label>
              <input
                name="password"
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button
              onClick={onSumit}
              className="btn btn-success btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Welcome to sign in page" description="A Agriculture store">
      {loadingMessage()}

       {signInForm()}                             {/*calling the signInForm */}
      {/* <p className="text-center">
        {JSON.stringify(values)}
      </p> */}
      {performRedirect()}
    </Base>
  );
};

export default Signin; 