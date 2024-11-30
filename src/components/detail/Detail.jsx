import React, { useEffect } from "react";
import "../detail/Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductInfo } from "../../store/slices/productInfoSlice";
import { toast } from "react-toastify";
import { addCart } from "../../store/slices/cartSlice";
import { addFavorite } from "../../store/slices/favorite";

const Detail = ({ params }) => {
    const { productinfoData } = useSelector(
        (state) => state.productinfo
      );

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProductInfo(params));
      }, [dispatch, params]);

    if (productinfoData === null) {
        return <h1>Loading...</h1>;
      }

      const AddToCart = (el) =>{
        toast.success("Successful-Cart");
        dispatch(addCart(el))
     }

     const Addfavorites = (el) =>{
        toast.success('Successful-Favorite')
        dispatch(addFavorite(el))
     }


  return (
    <div className="Detail-all">
      <div className="Detail">
        <div className="detail-img">
          <img style={{ width: 375 }} src={productinfoData.images[0]} alt="" />
        </div>
        <div className="detail-imgSlices">
          <img style={{ width: 90 }} src={productinfoData.images[1]} alt="" />
          <img style={{ width: 90 }} src={productinfoData.images[2]} alt="" />
        </div>
        <div className="detail-infoText">
          <h1>
            {productinfoData.title.length > 40
              ? `${productinfoData.title.slice(0, 40)}...`
              : productinfoData.title}
          </h1>
          <h4>{productinfoData.price}$</h4>
          <p
            style={{
              color: "#576067",
              fontSize: "14px",
              fontWeight: 500,
              marginTop: "20px",
            }}
          >
            Color:
            <span
              style={{
                color: "#F6F6F7",
                fontSize: "14px",
                fontWeight: 500,
                marginLeft: 10,
              }}
            >
              Blanc
            </span>
          </p>
          <p id="detail-des">
            {productinfoData.description.length > 220
              ? `${productinfoData.description.slice(0, 220)}...`
              : productinfoData.description}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
            <button onClick={()=>AddToCart(productinfoData)}>Add to cart</button>
            <button onClick={()=>Addfavorites(productinfoData)}>Add to favorites</button>
          </div>

          <div className="detial-end">
            <p>19 people purchased</p>
            <p>Find in a store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
