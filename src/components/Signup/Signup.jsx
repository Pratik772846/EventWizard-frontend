import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";
import  {Link} from "react-router-dom";

const cloudName = 'dv8zwrzop';
const Signup = () => {

  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    cnfmPassword: "",
    contact: "",
    imageURL:""
  });
  
  const [errors, setErrors] = React.useState({});
  const [image,setImage] = React.useState(null);
  const [url,setUrl] = React.useState("");
  const onImageChange = async(e)=>{
    const file = e.target.files[0];
    setImage(file);
  }

// handles image upload to cloudinary
  const handleImageUpload = async () => {
    const file = image;

    // Create a form data object to send the image file to the server
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Eventwizard'); // Replace with your Cloudinary upload preset

    // Send the image file to Cloudinary using the fetch API
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData
    });

    // Retrieve the uploaded image URL from the response
    const data = await response.json();
    const imageUrl = data.secure_url;
    console.log(imageUrl);

    // Set the uploaded image URL in the component state
    setDetails({...details,imageURL:imageUrl});
    setUrl(imageUrl);
    console.log(url);
    console.log(details);

    // here we will make the api call after we have the image link
  };


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
  
    if (!formData.name || !formData.name.trim()) {
      toast(" *Name is required ");
    }
  
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
  
  
    if(!formData.cnfmPassword){
      toast("Confirm Password is required");
    }
    else if (formData.cnfmPassword !== formData.password) {
      toast("Passwords do not match");
    }
  
    const contactNumberRegex = /^\d{10}$/;
    if (!formData.contact || !formData.contact.trim()) {
      toast("Contact Number is required");
    } else if (!contactNumberRegex.test(formData.contact)) {
      toast("Invalid contact number");
    }
  
    return errors;
  };
  



  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validate form before submitting
    const validationErrors = validateForm(details);
    if (Object.keys(validationErrors).length === 0) {
      // console.log("image upload begins.");
      // await handleImageUpload();
      // console.log("image upload ends.");
      // Form is valid, submit data or perform further actions
      // setTimeout(() => {
      //   console.log(details);
      //   console.log(url);
      // }, 2000);
      try {
        console.log(details);
        const response = await Axios.post('https://eventwizard-backend.onrender.com/user/signup',{
          name:details.name,
          email:details.email,
          password:details.password,
          contact:details.contact,
          imageURL:details.imageURL
          });
          console.log(response.data.message);
          toast(response.data.message);
      } catch (error) {
        console.log(error.message);
        toast(error.message);
      }


      

      
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white flex flex-col">
       
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-5 md:gap-5 lg:gap-0 justify-around items-center my-20">
          <div className="flex flex-col justify-center items-center gap-5 ">
            <p className='text-4xl font-header text-black'>Create Account</p>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-5'>

              <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                  type="text" 
                  name="name"
                  value={details.name} 
                  autoComplete="off"
                  placeholder="NAME *"
                  className='h-11 w-96 rounded-md  focus:outline-none  text-lg pl-3  placeholder-black'
                  onChange={handleChange}
                />
              </div>
              
               <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                 type="email" 
                 name="email"
                 value={details.email}
                 autoComplete="off"
                 placeholder="EMAIL*"
                 className='h-11 w-96 rounded-md  focus:outline-none  text-lg pl-3 placeholder-black'
                 onChange={handleChange}
                />
              </div>

              <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                  type="password" 
                  name="password"
                  value={details.password}
                  autoComplete="off"
                  placeholder="PASSWORD*"
                  className='h-11 w-96 rounded-md  focus:outline-none  text-lg pl-3 placeholder-black'
                  onChange={handleChange}
                />
              </div>
              
              <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                  type="password" 
                  name="cnfmPassword"
                  value={details.cnfmPassword}
                  autoComplete="off"
                  placeholder="CONFIRM PASSWORD*"
                  className='h-11 w-96 rounded-md  focus:outline-none  text-lg pl-3 placeholder-black'
                  onChange={handleChange}
                />
              </div>
              
              


              <input 
                type="file" 
                // accept="image/*" 
                placeholder="upload Image"
                onChange={onImageChange} 
              />
               {/* <button className='h-10 rounded-md border-2 border-white text-white text-xl' onSubmit={handleImageUpload}>Upload Image</button> */}

               <div className='bg-gradient-to-r from-color1  to-color2 p-1 rounded-lg '>
                <input 
                 type="text" 
                 name='contact'
                 value={details.contact} 
                 autoComplete="off"
                 placeholder="  CONTACT NUMBER*"
                 className='h-11 w-96 rounded-md  focus:outline-none  text-lg pl-3 placeholder-black'
                 onChange={handleChange}
                />
              </div>
              
              {errors.contact && <span>{errors.contact}</span>}

              <button type="submit" className='w-96 h-12 rounded-3xl bg-gradient-to-r from-color1  to-color2 text-xl justify-center text-white'>CREATE</button>

            </form>
            
            <span >
              Already have an Account?
              <Link to="/login" className='text-color1 pl-2' preventScrollReset={true}>Login</Link>
            </span>
          </div>
          <img src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685904375/EventWizard/signup_x0lkoc.jpg" 
            alt="logo"
            className='w-80 md:w-1/2 lg:w-2/5' />
        </div>
        
    </div>
  )
}

export default Signup