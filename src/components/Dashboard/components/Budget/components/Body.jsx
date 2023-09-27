import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Refresh from "../../../../../hooks/useRefreshtoken.jsx";
import { useParams } from 'react-router-dom';
import Modal from './EditModal.jsx'; 
import ReactModal from 'react-modal';
import { ImCross } from "react-icons/im";

const Body = () => {
  const [data, setData] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [editTransactionId, setEditTransactionId] = useState(null); 

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const accessToken = await Refresh();
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      const response = await axios.get(`http://localhost:3000/events/${id}`, config);
      setData(response.data.expenses);
      setTotalBudget(response.data.budget);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteTransaction = async (transactionId) => {
    try {
      const accessToken = await Refresh();
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      await axios.delete(`http://localhost:3000/expense/${id}`, {
        data: {
          transactionId: transactionId
        },
        ...config,
      });

     
      window.location.reload();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleOpenEditModal = (transactionId) => {
    setEditTransactionId(transactionId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditTransactionId(null);
    setShowEditModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pt-10">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col justify-center w-full px-5 py-2 my-5 bg-white lg:w-1/2 hover:bg-color4">
            <div className="flex justify-between">
              <div className="flex items-center gap-6">
                <img
                  src="https://static.moneylover.me/img/icon/ic_category_other_income.png"
                  alt=""
                  className="w-10"
                />
                <div className="flex flex-col items-center gap-3">
                  <span className="text-lg font-semibold text-color2">{item?.type}</span>
                  <span>1 Transactions</span>
                </div>
              </div>
              <span className="flex items-center text-xl bold">{item?.amount}.00</span>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-center gap-5 my-5 text-xl ">
              <button
                className="w-24 py-2 duration-200 bg-gray-100 rounded-lg text-color2 hover:scale-105 hover:bg-color2 hover:text-white"
                onClick={() => handleOpenEditModal(item?._id)} 
              >
                EDIT
              </button>
              <button
                className="w-24 py-2 duration-200 bg-gray-100 rounded-lg text-color2 hover:scale-105 hover:bg-color2 hover:text-white"
                onClick={() => handleDeleteTransaction(item?._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}

      
      <ReactModal
        isOpen={showEditModal}
        onAfterOpen={() => { }}
        onRequestClose={handleCloseEditModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        contentLabel="Edit Modal"
        ariaHideApp={false}
      >
        <div className="flex flex-col">
          <div className="flex justify-end pb-5">
            <button onClick={handleCloseEditModal} className="text-red-600">
              <ImCross />
            </button>
          </div>
         
          <Modal transactionId={editTransactionId} onClose={handleCloseEditModal} />
        </div>
      </ReactModal>

      <div className="flex justify-between w-full px-5 py-2 pb-5 my-5 bg-white lg:w-1/2">
        <div className="flex items-center gap-6">
          <img
            src="https://static.moneylover.me/img/icon/ic_category_other_income.png"
            alt=""
            className="w-10"
          />
          <div className="flex flex-col items-center gap-3">
            <span className="text-lg font-semibold text-color2">Total Budget</span>
            <span>1 Transactions</span>
          </div>
        </div>
        <span className="flex items-center text-xl bold">+{totalBudget}.00</span>
      </div>
    </div>
  );
};

export default Body;
