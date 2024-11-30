import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { addCart } from "../../store/slices/cartSlice";
import { addFavorite } from "../../store/slices/favorite";

const Card = ({el, title, images, description, category, price, id }) => {
  const dispatch =useDispatch()

  const AddToCart = (el) =>{
     toast.success(el.title);
     dispatch(addCart(el))
  }


  return (
    <div>
     
        <div className="card" id="#card" style={{ width: " 15rem" }}>
           <NavLink className='Navlink' to={'/info/' + id} >
          <img
            style={{ width: 238.5 }}
            src={images}
            className="card-img-top"
            alt="..."
          />
            </NavLink>
          <div className="card-body">
          <NavLink className='Navlink' to={'/info/' + id} >

          
            <h5 className="card-title" style={{color:"black"}}>
              {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </h5>
            
            <h4 style={{ fontSize: 14 , color:"black"}}>{category}</h4>
            </NavLink>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

                <a onClick={()=>AddToCart(el)} className="btn btn-primary">
                  Add
                </a>
              <span>Price: {price}$</span>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
