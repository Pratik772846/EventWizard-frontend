// import React from 'react'

const Body = () => {
    const data = [
        {amount:"-450",
        category:"Food",}
        ,{
        amount:"-450",
        category:"Food",
        },
        {
        amount:"7800",
        category:"Interest"
        }
    ];
  return (
    <div className="w-full flex flex-col pt-10 justify-center items-center">

        {data.map((item)=>{
            return(
                <div key={4} className="flex flex-col justify-center w-1/3 bg-white px-5 py-2 my-5 hover:bg-color4">
                    <div className="flex justify-between " >
                        <div className="flex items-center gap-6 ">
                            <img src="https://static.moneylover.me/img/icon/ic_category_other_income.png" 
                            alt=""
                            className="w-10" />
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold">{item?.category}</span>
                                <span>1 Transactions</span>
                            </div>

                        </div>
                        <span className="flex items-center text-2xl bold">{item.amount}.00</span> 
                    </div>
                    <div className="flex justify-center gap-5 text-xl my-5">
                        <button className="text-color2 bg-gray-100 w-24 py-2 rounded-lg">EDIT</button>
                        <button className="text-color2 bg-gray-100 w-24 py-2 rounded-lg">DELETE</button>
                    </div>
                </div>
            )
        })}
       <div className="flex justify-between w-1/3 bg-white px-5 py-2 my-5">
            <div className="flex items-center gap-6 ">
                <img src="https://static.moneylover.me/img/icon/ic_category_other_income.png" 
                alt=""
                className="w-10" />
                <div className="flex flex-col items-center gap-3">
                    <span className="text-lg font-semibold">Other Income</span>
                    <span>1 Transactions</span>
                </div>
            </div>
            <span className="flex items-center text-2xl bold">+4000.00</span>
       </div>

       

    </div>
  )
}

export default Body
