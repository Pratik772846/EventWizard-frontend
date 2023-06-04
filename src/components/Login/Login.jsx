import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useBearStore } from '../../store/index.js';
import Navbar from '../LandingPage/components/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
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
    <div className="bg-white  flex flex-col">
        <Navbar/> 
       
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 md:gap-10 lg:gap-0 flex-grow justify-around items-center my-28">
          <div className="flex flex-col justify-center items-center gap-5 ">
            <p className='text-4xl font-header text-black'>Login </p>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-5'>
            
              <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                  type="email" 
                  name="email"
                  value={details.email}
                  autoComplete="off"
                  placeholder="EMAIL*"
                  className='h-11 w-96 rounded-md bg-white focus:outline-none  text-lg pl-3 placeholder-black'
                  onChange={handleChange}
                />
              </div>
              
              {/* {errors.email && <span>{errors.email}</span>} */}
              <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                  type="password" 
                  name="password"
                  value={details.password}
                  autoComplete="off"
                  placeholder="PASSWORD*"
                  className='h-11 w-96 rounded-md  bg-white  focus:outline-none  text-lg pl-3 placeholder-black'
                  onChange={handleChange}
                />
              </div>
              

              <button type="submit" className='w-96 h-12 rounded-3xl bg-gradient-to-r from-color1  to-color2 text-xl justify-center text-black'>LOGIN</button>

            </form>
            
            <span >
              Create Account 
              <a href="/signup" className='text-color1 pl-2'>Signup</a>
            </span>
          </div>
          <img src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685900759/EventWizard/login_dekh49.jpg" 
            alt="logo" 
            className='w-80 md:w-2/5 lg:w-1/4 h-92 rounded-md'/>
        </div>
        <Footer/>
        
        
    </div>
  )
}

export default Login