// import React from 'react';
// import { useBearStore } from '../../../store/index.js';
// import { FaUserCircle } from 'react-icons/fa';
// import Navbar from './Navbar.jsx';
// import Footer from '../../Footer/Footer.jsx';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const { name, email } = useBearStore((state) => state.userProfile);
//   const contact_number = '1234567890';
//   const image = 'https://static.vecteezy.com/system/resources/previews/036/445/141/original/avatar-people-profile-user-icon-in-flat-style-on-a-white-background-design-elements-of-technology-computer-internet-website-graphic-resources-free-vector.jpg';

//   const renderProfileImage = () => {
//     if (image) {
//       return <img src={image} alt="Profile" className="w-24 h-24 mx-auto rounded-full" />;
//     } else {
//       return <FaUserCircle className="w-24 h-24 mx-auto text-gray-300" />;
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 md:flex-row">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage: `url('https://res.cloudinary.com/dv8zwrzop/image/upload/v1685900315/EventWizard/evento_c.987980d92e74ea624578_thmmmv.png')`,
//             filter: 'brightness(3)',
//             backgroundSize: '80%',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             opacity: 0.3,
//           }}
//         />
//         <div className="relative z-10 w-full max-w-md p-6 bg-white border-4 border-indigo-200 rounded-lg shadow-lg bg-opacity-80 md:w-2/3 md:h-120 shadow-blue-700">
//           <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">User Profile</h2>
//           <div className="flex flex-col items-center justify-center mb-6">
//             <div>{renderProfileImage()}</div>
//             <div className="mt-4 text-center">
//               <h3 className="mb-2 text-xl font-medium">{name}</h3>
//               <p className="text-gray-800">{email}</p>
//               <p className="text-gray-800">{contact_number}</p>
//             </div>
//           </div>
//           <hr className="my-6" />
//           <div className="flex flex-col items-center justify-center mb-6 md:justify-between">
//             <div className="flex flex-col md:flex-row">
//               <Link
//                 to="/edit-profile"
//                 className="px-4 py-2 mb-2 mr-2 font-semibold text-white bg-blue-500 rounded md:mb-0 hover:bg-blue-700"
//               >
//                 Edit Profile
//               </Link>
//               <Link
//                 to="/home"
//                 className="px-8 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700"
//               >
//                 Home
//               </Link>
//             </div>
//           </div>
//         </div>
       
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

import React, { useEffect } from 'react';
import { useBearStore } from '../../../store/index.js';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from './Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { userProfile, invitationsCount, setInvitationsCount } = useBearStore((state) => ({
    userProfile: state.userProfile,
    invitationsCount: state.invitationsCount,
    setInvitationsCount: state.setInvitationsCount,
  }));

  const { name, email, invitations } = userProfile;
  const contact_number = '1234567890';

  useEffect(() => {
    if (invitations) {
      setInvitationsCount(invitations.length);
    }
  }, [invitations, setInvitationsCount]);

  const image = 'https://static.vecteezy.com/system/resources/previews/036/445/141/original/avatar-people-profile-user-icon-in-flat-style-on-a-white-background-design-elements-of-technology-computer-internet-website-graphic-resources-free-vector.jpg';

  const renderProfileImage = () => {
    if (image) {
      return <img src={image} alt="Profile" className="w-40 h-40 border-4 border-white rounded-full shadow-md" style={{ marginTop: '-120px' }} />;
    } else {
      return <FaUserCircle className="w-40 h-40 text-gray-300" style={{ marginTop: '-120px' }} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
       
        <div className="w-screen h-60 bg-gradient-to-r from-blue-200 to-blue-400"></div>

          
        <div className="relative w-4/5 max-w-4xl -mt-32 bg-white border-4 border-purple-500 shadow-lg rounded-xl ">
         
          <div className="relative flex flex-col items-center px-10 pt-12 pb-16">
            {renderProfileImage()}
            <h1 className="mt-16 text-3xl font-bold">{name}</h1>
            <p className="mt-8 text-xl text-gray-600">{email}</p>
            <p className="mt-4 text-xl text-gray-500">{contact_number}</p>
          </div>

          
          <div className="px-10 py-2">
            
            <div className="flex justify-center pt-4 mt-8 space-x-8 border-t border-gray-200">
              <div className="text-center">
                <span className="text-2xl font-bold">{invitationsCount}</span>
                <p className="text-sm text-gray-600">Invitations</p>
              </div>
            </div>

            
            <div className="flex justify-center mt-6 space-x-4">
              <Link
                to="/edit-profile"
                className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                Edit Profile
              </Link>
              <Link
                to="/home"
                className="px-4 py-2 text-sm font-bold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;