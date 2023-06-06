import React from 'react'
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate=useNavigate();
   function handleSubmit(e){
    e.preventDefault();
    navigate("/");

   }
  // const [email, setEmail] = useState()
  // const [password,setPassword]=useState()
  // function handleChange(event){
  //   event.preventDefault()  }
  // onChange={e => setEmail(e.target.value)}
  // onChange={e=>setPassword(e.target.value)}
  // 
  return (
    <div className='log'  >
        <div>
        <form className='container-2'>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Your mail' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor ='password'>Password</label>
                <input type ='password' placeholder='Enter Password'className='form-control'/>
                </div>
                <button onSubmit={handleSubmit} style={{color:'black',backgroundColor:'green',width:'50%',border:'1px'}}>Login</button>
        </form>
        </div>   
    </div>
  )
}
