import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const CORS_URL = process.env.CORS_URL

export default function MyOrder() {
    let response =[]
    const [foodData, setFoodData] = useState([{}]);
    const [empty, setempty] = useState(true);
    const fetchMyOrder = async () => {
        try {
            const res = await fetch("https://quickcravebackend.onrender.com/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            response = await res.json();
            // console.log(response.length);
            if(response.length===0)
                setempty(true)
            else setempty(false)
            // console.log(empty);
            setFoodData(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    // console.log("response length ",response.status);
    // console.log("fooddata",foodData);
    // if(response.length ===0)
    // {
    //     return (
    //         <div>no orders placed</div>
    //     )
    // }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            {   empty===false?
                <div className='container text-center grid' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        foodData.reverse().map((arrayData, idx) => (
                            <div key={idx} className='text-center grid' >
                                {/* Render your item details here */}
                                <div className='g-col-6 g-col-md-4' >
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                        <div className="card-body">
                                            <h5 className="card-title">{arrayData.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{arrayData.qty}</span>
                                                <span className='m-1'>{arrayData.size}</span>
                                                {/* <span className='m-1'>{data}</span> */}
                                                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                    ₹{arrayData.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))

                    }
                </div>
                :
                <div style={{textAlign:'center' , fontSize :'xx-large',height :'60vh', display:'flex', alignItems:'center', justifyContent:'center'}}>No orders placed </div>
            }
            <div>
                <Footer />
            </div>
        </div>
    );
}