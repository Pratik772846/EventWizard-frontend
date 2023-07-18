import {useState} from 'react'
import {GiMoneyStack} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import ReactModal from "react-modal";
import Modal from "./Modal";
import Chart from "./Chart";

const Navbar = () => {
  const [showModal,setShowModal] = useState(false);
  const [showModal1,setShowModal1] = useState(false);
   
  const handleOpenModal = ()=>{
    setShowModal(true);
  }
  const handleCloseModal = ()=>{
    setShowModal(false);
  } 
  const handleOpenModal1 = ()=>{
    setShowModal1(true);
  }
  const handleCloseModal1 = ()=>{
    setShowModal1(false);
  }
  function afterOpenModal() {
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
  return (
    <div className="h-20 w-full flex justify-between px-10 items-center bg-white">
        <div className="flex  text-3xl gap-2">
            <GiMoneyStack/>
            <span className="text-xl">
                +4000.00
            </span>
        </div>
        
        <button 
        className="my-10 bg-color2 text-white text-lg py-3 px-4 rounded-xl duration-200 hover:scale-105"
        onClick={handleOpenModal1}>
          View Report
        </button>
        
        <button 
        className="h-2/3 px-2 mr-5 rounded-xl text-white bg-color2 text-lg duration-200 hover:scale-105"
        onClick={handleOpenModal}>
            Add transaction
        </button>
      <ReactModal
        isOpen={showModal1}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal1}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}>
          <div className="flex flex-col">
            <div className="flex justify-end pb-5">
              <button onClick={handleCloseModal1} className="text-red-600"><ImCross/></button>
            </div>
            <Chart/>
          </div>
      </ReactModal>

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
              <Modal/>
            </div>
        </ReactModal>
    </div>
  )
}

export default Navbar