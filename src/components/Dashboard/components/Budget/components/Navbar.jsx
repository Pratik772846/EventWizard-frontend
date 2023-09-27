import React, { useState, useEffect } from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import ReactModal from "react-modal";
import Modal from "./Modal";
import Chart from "./Chart";
import axios from 'axios';
import Refresh from "../../../../../hooks/useRefreshtoken.jsx";
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await Refresh();
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };

        const response = await axios.get(`http://localhost:3000/events/${id}`, config);
        setTotalBudget(response.data.budget);
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const totalExpensesAmount = expenses.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  const budgetDifference = totalBudget - totalExpensesAmount;

  const handleOpenModal = () => {
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }
  const handleOpenModal1 = () => {
    setShowModal1(true);
  }
  const handleCloseModal1 = () => {
    setShowModal1(false);
  }

  function afterOpenModal() {}

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%', 
    },
  };

  const customStylesChart = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%', 
      maxWidth: '800px',
    },
  };

  return (
    <div className="flex items-center justify-between w-full h-20 px-10 bg-white">
      <div className="flex gap-2 text-3xl">
        <GiMoneyStack />
        <span className={`text-xl ${budgetDifference >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {budgetDifference.toFixed(2)}
        </span>
      </div>

      <button
        className="px-4 py-3 my-10 text-lg text-white duration-200 bg-color2 rounded-xl hover:scale-105"
        onClick={handleOpenModal1}
      >
        View Report
      </button>

      <button
        className="px-2 mr-5 text-lg text-white duration-200 h-2/3 rounded-xl bg-color2 hover:scale-105"
        onClick={handleOpenModal}
      >
        Add transaction
      </button>

      <ReactModal
        isOpen={showModal1}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal1}
        style={customStylesChart}
        contentLabel="Chart Modal"
        ariaHideApp={false}
      >
        <div className="flex flex-col">
          <div className="flex justify-end pb-5">
            <button onClick={handleCloseModal1} className="text-red-600">
              <ImCross />
            </button>
          </div>
          <Chart />
        </div>
      </ReactModal>

      <ReactModal
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="flex flex-col">
          <div className="flex justify-end pb-5">
            <button onClick={handleCloseModal} className="text-red-600">
              <ImCross />
            </button>
          </div>
          <Modal />
        </div>
      </ReactModal>
    </div>
  );
};

export default Navbar;
