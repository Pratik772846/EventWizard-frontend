import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useBearStore } from '../../store/index.js';
const Login = () => {

  const [details, setDetails] = React.useState({
    email: "singhpratik087015@gmail.com",
    password: "123456"
  });
  const navigate = useNavigate();

  const state = useBearStore();
  console.log(state.isAuthenticated);
  
  // console.log(state.isAuthenticated);
  const Login = useBearStore(state => state.Login);
  

// handle changes to details object
  const handleChange = (e) => {
    setDetails((details) => ({
      ...details,
      [e.target.name]: e.target.value
    }));
  };

  // adds validations in form before submitting it
  const validateForm = (formData) => {
    const errors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      toast("Email is required");
    } else if (!emailRegex.test(formData.email)) {
      toast("Invalid email format");
      errors.email = '*Invalid email format';
    }
  
    if (!formData.password || !formData.password.trim()) {
      toast("Password is required");
    } else if (formData.password.length < 6) {
      toast("Password should be at least 6 characters long");
    }
  
  
    return errors;
  };
  



  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validate form before submitting
    const validationErrors = validateForm(details);
    if (Object.keys(validationErrors).length === 0) {

      try {
        console.log(details);
        const response = await Axios.post('https://eventwizard-backend.onrender.com/user/login',{
          email:details.email,
          password:details.password
          });
          console.log(response);
          console.log(response.data.message);
          if(response.data.message==='Auth successful'){
            
            // await Login();
            state.isAuthenticated = true;
            sessionStorage.setItem('isAuthenticated',true);
            console.log(state);
            console.log(state.isAuthenticated)
            // console.log(state.isAuthenticated);
            navigate('/home',{ replace: true });
          }
          else{
            navigate('/',{replace:true});
          }
          toast(response.data.message);
      } catch (error) {
        console.log(error.message);
        toast(error.message);
      }
      
    }
  };

  return (
    <div className="bg-gradient-to-b from-color1  to-color2 h-screen flex flex-col">
        <nav className="h-20 md:h-32 lg:h-32 " >Logo</nav>
       
        <div className="flex flex-grow justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 hover:scale-110">
            <p className='text-4xl font-header text-white'>Login </p>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-5'>
            
            
              <input 
                type="email" 
                name="email"
                value={details.email}
                autoComplete="off"
                placeholder="   EMAIL*"
                className='h-11 w-96 rounded-md border-2 border-white focus:outline-none focus:border-color3 text-lg bg-transparent placeholder-white'
                onChange={handleChange}
              />
              {/* {errors.email && <span>{errors.email}</span>} */}

              <input 
                type="password" 
                name="password"
                value={details.password}
                autoComplete="off"
                placeholder="  PASSWORD*"
                className='h-11 w-96 rounded-md border-2 border-white focus:outline-none focus:border-color3 text-lg bg-transparent placeholder-white'
                onChange={handleChange}
              />

              <button type="submit" className='w-96 h-12 rounded-3xl bg-white text-xl justify-center text-slate-400'>LOGIN</button>

            </form>
            
            <span >
              Create Account 
              <a href="/" className='text-color4 pl-5'>Signup</a>
            </span>
          </div>
        </div>
        
        
    </div>
  )
}

export default Login