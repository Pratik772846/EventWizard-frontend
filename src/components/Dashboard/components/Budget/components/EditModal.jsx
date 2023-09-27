import { useState, useEffect } from "react";
import axios from "axios";
import Refresh from "../../../../../hooks/useRefreshtoken.jsx";
import { useParams } from "react-router-dom";

const Modal = ({ transactionId }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else {
      setType(e.target.value);
    }
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const accessToken = await Refresh();
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios.get(
          `http://localhost:3000/events/${id}`,
          config
        );

        const transaction = response.data.expenses.find(
          (transaction) => transaction._id === transactionId
        );

        if (transaction) {
          setAmount(transaction.amount);
          setType(transaction.type);
        }
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, [id, transactionId]);

  const handleSubmit = async () => {
    try {
      if (!amount || !type) {
        return;
      }

      setIsSaving(true);

      const accessToken = await Refresh();
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      await axios.put(
        `http://localhost:3000/expense/${id}`,
        {
          transactionId,
          amount,
          type,
        },
        config
      );

      setIsSaving(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-red-100">
      <span className="p-4 text-2xl font-bold">Edit Transaction</span>
      <hr className="w-full bg-black" />
      <input
        type="number"
        name="amount"
        value={amount}
        autoComplete="off"
        placeholder="Amount"
        className="pl-3 mx-10 my-5 text-lg placeholder-gray-400 bg-gray-100 rounded-md h-11 w-96 focus:outline-none"
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        value={type}
        autoComplete="off"
        placeholder="Category"
        className="pl-3 mx-10 mb-10 text-lg placeholder-gray-400 bg-gray-100 rounded-md h-11 w-96 focus:outline-none"
        onChange={handleChange}
      />
      <button
        className={`w-1/2 h-10 mb-5 text-xl duration-200 bg-white border-2 rounded-xl hover:scale-105 text-color2 hover:bg-color2 hover:text-white ${
          isSaving ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handleSubmit}
        disabled={isSaving || !amount || !type}
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default Modal;
