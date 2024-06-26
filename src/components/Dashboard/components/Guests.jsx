import { useEffect,useState } from "react";
import { useOutletContext } from "react-router-dom";
import Shimmer from "../../Shimmer/Shimmer";
import logo from "../../../assets/img.avif";
import ReactModal from "react-modal";
import Profile from "./Profile";
import {ImCross} from "react-icons/im";

const Guests = ()=>{
    const [details,setDetails] = useOutletContext();
    const [guests,setGuests] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [user,setUser] = useState("");
     
    const handleOpenModal = ()=>{
      setShowModal(true);
    }
    const handleCloseModal = ()=>{
      setShowModal(false);
    }
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    

    useEffect(()=>{
        console.log(details);
        console.log(details?.guests);
        setGuests(details?.guests);
    },[details?.guests])

    const handleClick = (userId)=>{
      console.log(userId);
      setUser(userId);
      handleOpenModal();
    }
    
    
    const shimmerui = ()=>(
        <div className='flex flex-wrap justify-center items-center pb-12'>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
        </div>
    )

    const message = () =>(
      <h1 className="text-2xl text-gray-800 text-center  mb-5 font-bold p-4 rounded-lg">
        This event has zero guests at this moment
      </h1>

    );

    

    const showGuests=()=>(
        <div className="flex flex-row flex-wrap justify-center items-center gap-20  py-10">
        {guests.map(({ _id,userId, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white w-96 flex flex-col justify-center items-center gap-5">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={logo} alt="Guest Image" className="w-32 h-32 rounded-full pt-2" />
              <p className="pt-6  italic font-medium text-5xl antialiased "> {name.toUpperCase()}</p>
            </div>
            <button 
                  className=" px-6 py-3 m-4 text-center text-white rounded-lg text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
                  onClick={()=>handleClick(userId)}
                  >View Details
            </button>
          </div>
        ))}
        <ReactModal
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}>
            <div className="flex flex-col">
              <div className="flex justify-end pb-5">
                <button onClick={handleCloseModal} className="text-red-600"><ImCross/></button>
              </div>
              
              <Profile
              userId={user}/>
            </div>
          </ReactModal>
    </div>
      )
    
    if(!details) return null;
    return(
        <div className="w-full h-full bg-gray-300  ">
            {console.log(guests)}
            {guests===undefined  ? shimmerui() : guests.length===0 ? message() :showGuests()}
        </div>
    )
}

export default Guests;