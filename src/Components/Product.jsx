import React,{useState,useEffect} from 'react'

const Product = () => {
    const [list,setlist]=useState([])
    const [price,setPrice]=useState()

    useEffect(()=>{
        fetch(`http://localhost:3004/products`)
         .then(res=>res.json())
        .then(data=>setlist(data))
      },[])

      function DisplayData()
      {
    //     fetch("http://localhost:3004/?_sort=Price&_order="+price)
    //     .then(res=>res.json())
    //    .then(data=>setlist(data))  
      }


  return (
     <div>
     <div>
        <h1>sort by price</h1>
         <select name="" id="">
             <option value="asc">asc</option>
             <option value="desc">desc</option>
         </select>
     </div>

     <div>
        <h1>sort by price</h1>
         <select name="" id="" value={price} onClick={DisplayData} onChange={(e)=>setPrice(e.target.value)}>
             <option value="Electronics">Electronics</option>
             <option value="Clothing">Clothing</option>
             <option value="Food">Food</option>
             <option value="Stationary">Stationary</option>
         </select>
     </div>

    <div className='container'>
      {
        list.map((ele)=>{
              return (
                  <div>
                    <h1>{ele.Name}</h1>
                    <p>{ele.Price}</p>
                    <p>{ele.category}</p>
                  </div>
              )
          })
      }
    </div>
    </div>
  )
}

export default Product