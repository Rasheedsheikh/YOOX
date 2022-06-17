import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar2 from '../../Components/Navbar2'
import Navbar3 from '../../Components/Navbar3'

const CheckOut = () => {

  const nav=useNavigate()

  const handleClick=()=>{
    nav("/payment")
  }

  return (
    <div>
      <Navbar3/>
<div className="new">
<div>
<h3>SHIPPING</h3>
<p>enter shipping adress</p>
</div>

{/* Calling to the methods */}


<form>
    <div className='fc1'>
{/* Labels and inputs for form data */}
{/* <label className="label">Name</label> */}
<input className="input" type="text"  placeholder='First Name'/>

{/* added */}

{/* <label className="label">Name</label> */}
<input className="input" type="text"  placeholder='Last Name'/>
</div>

<div className='fc2'>
{/* <label className="label">Name</label> */}
<input  className="input"  type="text" placeholder="C/O" />

{/* <label className="label"></label> */}
<input className="input"  type="number" placeholder='TELEPHONE'/>

</div>


<div className='fc3'>
{/* <label className="label">STREET ADRESS</label> */}
 <input  className="input"  type="text" placeholder="STREET_ADRESS" /> 

{/* <label className="label">'ZIPCODE'</label> */}
<input className="input"  type="number" placeholder='ZIPCODE'/>

</div>



<div className='fc4'>
{/* <label className="label">CITY</label> */}
<input  className="input"  type="text" placeholder="CITY" />

{/* <label className="label">'STATE'</label> */}
<input className="input"  type="number" placeholder='STATE'/>

</div>




<button  className="btn" onClick={()=>{handleClick()}}>
PROCEED TO PAYMENT
</button>
</form>
</div>
<Footer/>

    </div>
  )
}

export default CheckOut