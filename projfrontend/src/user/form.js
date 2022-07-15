// import axios from 'axios'
// import React, {useState} from 'react'

// const LoginForm = () => {
  
//   const [formValue, setformValue] = React.useState({
//     id: '',
//     name: ''
//   });

//   const handleSubmit = async() => {
//   // store the states in the form data
//   const loginFormData = new FormData();
//   //loginFormData.append("id", formValue.id)
//   //loginFormData.append("name", formValue.name)

//   var d = {
//     "id": formValue.id,
//     "name": formValue.name,
//   };
//   var jd = JSON.stringify(d);

//   try {
//     // make axios post request
//     const response = await axios({
//       method: "post",
//       url: "https://j494jyfowk.execute-api.us-west-2.amazonaws.com/default/fun1",
//       data: jd,
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   } catch(error) {
//     console.log(error)
//   }
//   }

//   const handleChange = (event) => {
//     setformValue({
//       ...formValue,
//       [event.target.name]: event.target.value
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Login Form</p>
//       <input
//         type="test"
//         name="id"
//         placeholder="enter int id"
//         value={formValue.id}
//         onChange={handleChange}
//       />
//       <br></br>
//       <input
//         type="text"
//         name="name"
//         placeholder="enter your name less than 10 char"
//         value={formValue.name}
//         onChange={handleChange}
//       />
//       <br></br>
//       <button
//         type="submit"
//       >
//         submit
//       </button>
//     </form>
//   )
// };

// const App = () => {
  

//   return (
//     <div>
//       Page Running
//       <br/>
//       <LoginForm />
//     </div>
//   )
// }

// export default App