import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
    const [foodcat,setFoodCat]=useState([])
    const [fooditem,setFoodItem]=useState([])
    const [search,setSearch]=useState([])
   //const search={background}
   const bg = {backgrounImage:"#e5e5e5",







  };
  const navbar = {backgroundColor: " #35185A"







};

    
    const loadData=async ()=>{
      let response=await fetch("https://quickcravebackend.onrender.com/api/foodData",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        });
        response=await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    
    }


    useEffect(()=>{
        loadData()
    },[])
    

    return (
        <div style={bg}>
            <div><Navbar></Navbar></div>
            <div><div className="carousel-indicators">
     

   </div >
  
    <div className="carousel-inner" style={{maxHeight:"900px"}}>
      <div className='carusal-cap' style={{zIndex:"10"}}>
     
    <div className="d-flex">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} style={bg}></input>
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </div>
 
      </div>
      <div className="carousel-item active">
        <img src="backgg.png" className="d-block w-100"  alt="..."></img>
      </div>
      <div className="carousel-item">
        <img src="pizza.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."></img>
      </div>
      <div className="carousel-item">
        <img src="rajma.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."></img>
      </div>
      <div className="carousel-item">
        <img src="burger.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."></img>
      </div>
    </div>
    </div>
            <div className='container' style={bg}>
                {
                    foodcat!=[]
                    ?foodcat.map((data)=>{
                        return (
                            <div className='row mb-3' >
                        <div key={data._id} className='fs-3 m-3'>
                            {data.CategoryName}
                            </div>
                            <hr></hr>

                            { fooditem != []? fooditem.filter((item)=>(item.CategoryName==data.CategoryName) && (item.name.toLowerCase().includes(search))).
                            map(filterItems=>{
                                return(
                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'><Card foodName={filterItems.name}
                                    options={filterItems.options[0]}
                                    imgSrc={filterItems.img}
                                    desc={filterItems.description}
                                    item={filterItems}
                                    
                                    
                                    ></Card></div>
                                )
                            })
                            :<div>"no such data"</div>}
                            </div>
                            )
                    })
                    :""
                }
            
           </div>
           
            <div><Footer></Footer></div>
        </div>
    );
}
