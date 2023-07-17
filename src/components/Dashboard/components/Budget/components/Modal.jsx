import { useState } from "react";

const Modal = ()=>{
  const [amount,setAmount] = useState();
  const [category,setCategory] = useState("");
  const handleChange = (e)=>{
      if(e.target.name === "amount"){
        setAmount(e.target.value)
      }else{
        setCategory(e.target.value)
      }   
  }
  const handleSubmit = ()=>{
    console.log(amount);
    console.log(category);
  }
    return(
        <div className="bg-red-100 flex flex-col w-full justify-center items-center ">
            <span className="text-2xl bold p-4">Add Transaction</span>
            <hr className="bg-black w-full"/>
            <input 
                  type="number" 
                  name="amount"
                  value={amount}
                  autoComplete="off"
                  placeholder="Amount"
                  className='h-11 w-96 rounded-md  bg-gray-100  my-5 focus:outline-none  mx-10 text-lg pl-3 placeholder-gray-400'
                  onChange={handleChange}
            />
            <input 
                  type="text" 
                  name="category"
                  value={category}
                  autoComplete="off"
                  placeholder="Category"
                  className='h-11 w-96 rounded-md  bg-gray-100  focus:outline-none mb-10 mx-10 text-lg pl-3 placeholder-gray-400'
                  onChange={handleChange}
            />
            <button 
            className="bg-white border-2 mb-5 h-10 rounded-xl w-1/2 text-xl text-color2"
            onClick = {handleSubmit}>
                Save
            </button>
        </div>
    )
}

export default Modal;