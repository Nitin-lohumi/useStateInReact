import { useRef,useState } from "react";

function Body(){
   const [shop,setShop]= useState(0);
   const [add,setAdd]= useState(0);
   function change(){
     setShop(shop => shop + 1)
   }
   function change1(){
      setAdd(add=>add+1);
   }
   return (
    <>
   <div className="boxx2">
   <div className="innerBoxx">
    <h2>Your feet Deserve the best</h2>
    <h3>your feet deserve the best and we are here to help you with our shoes. 
     Your feet  deserve the best and  we here to help you with our shoes.
    </h3>
    <p>you shop items {shop}</p>
    <input type="button" value="shop now"  onClick={change}/>
    <button onClick={change1}>Add to card</button>
    <p>you add new  items {add}</p>
   </div>
   
    <div className="shoes">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqnffsFvjFVLigy1eZJgkawnterk9orSnAg&s" alt="shoes" />

     </div>
   </div>
    
    </>
   )
}
export default Body;