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
                <div key={4} className="flex flex-col justify-center w-full lg:w-1/2 bg-white px-5 py-2 my-5 hover:bg-color4">
                    <div className="flex justify-between " >
                        <div className="flex items-center gap-6 ">
                            <img src="https://static.moneylover.me/img/icon/ic_category_other_income.png" 
                            alt=""
                            className="w-10" />
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold text-color2">{item?.category}</span>
                                <span>1 Transactions</span>
                            </div>

                        </div>
                        <span className="flex items-center text-xl bold">{item.amount}.00</span> 
                    </div>
                    <hr className="mt-4"/>
                    <div className="flex justify-center gap-5 text-xl my-5 ">
                        <button className="text-color2 bg-gray-100 w-24 py-2 rounded-lg duration-200 hover:scale-105 hover:bg-color2 hover:text-white">EDIT</button>
                        <button className="text-color2 bg-gray-100 w-24 py-2 rounded-lg duration-200 hover:scale-105 hover:bg-color2 hover:text-white">DELETE</button>
                    </div>
                    
                </div>
            )
        })}
       <div className="flex justify-between w-full lg:w-1/2 bg-white px-5 py-2 pb-5 my-5">
            <div className="flex items-center gap-6 ">
                <img src="https://static.moneylover.me/img/icon/ic_category_other_income.png" 
                alt=""
                className="w-10" />
                <div className="flex flex-col items-center gap-3">
                    <span className="text-lg font-semibold text-color2">Total Budget</span>
                    <span>1 Transactions</span>
                </div>
            </div>
            <span className="flex items-center text-xl bold">+4000.00</span>
       </div>

       

    </div>
  )
}

export default Body
