import React,{useState} from 'react'


const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email )){
            alert("Please enter a valid email address");
            
        }
       
       else if(password.length<4){
            alert("Password must be at least 4 characters long");
            
        }
        else{
            alert("SignUp successful");
        }

    }
    
  return (
    <div className='bg-blue-400 min-h-screen flex justify-center items-center text-blue-700 '>
        <div className='h-96 w-96 bg-white rounded-md shadow-2xl '>
             <h1 className='text-3xl font-bold text-center mt-10'>Sign Up</h1>
            <div>
               
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' className='w-72 h-10 border border-gray-300 rounded-md mt-10 ml-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' value={username} onChange={(e)=> setUsername(e.target.value)} />
                <input type="email" placeholder="Email" className='w-72 h-10 border border-gray-300 rounded-md mt-4 ml-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className='w-72 h-10 border border-gray-300 rounded-md mt-4 ml-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-4 ml-30 hover:bg-blue-600 cursor-pointer'>SignUp</button>
                </form>
            </div>
        </div>
        </div>
  )
}

export default SignUp