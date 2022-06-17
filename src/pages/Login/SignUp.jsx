import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar3 from '../../Components/Navbar3';
import "./SignUp.css"
 const SignUp=()=> {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [firstn, setFirstn] = useState("");
const [password, setPassword] = useState('');
const nav=useNavigate()
// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setFirstn(e.target.value);
setSubmitted(false);
};

const handleNameL = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    };
    

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
    nav("/signin")

};

// Showing success message
const successMessage = () => {
return (

  
<div
className="success"
style={{
display: submitted ? '' : 'none'
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
    <>
    <Navbar3/>


<br /><br /><br />


<div className="form">
<div>
<h1>User Registration</h1>
</div>

{/* Calling to the methods */}


<form>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={firstn} type="text"  placeholder='First Name'/>

{/* added */}

<label className="label"> Last Name</label>
<input onChange={handleNameL} className="input"
value={name} type="text"  placeholder='Last Name'/>



<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" placeholder='Email' />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" placeholder='password'/>

<button onClick={()=>{handleSubmit()}} className="btn" type="submit">
SIGNUP
</button>
</form>
</div>
<br /><br /><br />
<Footer/>
</>
);
}


export default SignUp