import { useEffect,useState } from "react";
import { useOutletContext } from "react-router-dom";
import Shimmer from "../../Shimmer/Shimmer";
import logo from "../../../assets/logo.jpg";
import ReactModal from "react-modal";
import Profile from "./Profile";
import {ImCross} from "react-icons/im";
// import {ImHome} from "react-icons/im";
// ReactModal.setAppElement('#yourAppElement');
const Guests = ()=>{
    const [details,setDetails] = useOutletContext();
    const [guests,setGuests] = useState("");
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

    

    const showGuests=()=>(
        <div className="flex flex-row flex-wrap justify-center items-center gap-20  py-10">
        {guests.map(({ _id,userId, name }) => (
          <div key={_id} className="rounded-lg shadow-md shadow-gray-600 bg-white w-96 flex flex-col justify-center items-center gap-5">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={logo} alt="Guest Image" className="w-20 h-20 rounded-full pt-2" />
              <p className="pt-6 text-4xl  "> {name.toUpperCase()}</p>
            </div>
            <button 
                  className=" px-6 py-3 m-4 text-center text-xl duration-200 hover:scale-105 bg-gradient-to-r from-color1  to-color2"
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

    return(
        <div className="w-full h-full bg-color6  ">
            {guests.length===0 ? shimmerui() : showGuests()}
        </div>
    )
}

export default Guests;