import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../../store/slices/productInfoSlice";
import { getProducts } from "../../store/slices/productSlices";

import Card from "../../components/card/Card";
import Detail from "../../components/detail/Detail";

const Productinfo = () => {
  const { productsData, isLoading, error } = useSelector(
    (state) => state.product
  );
  // const { productinfoData } = useSelector(
  //   (state) => state.productinfo
  // );
  const [filterData, setFilterData] = useState();
  const [insvible, setinsvible] = useState(true);
  
  const params = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductInfo(params.id));
  // }, [dispatch]);

  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (productsData === null) {
    return <h1 style={{textAlign:"center", color:"white"}}>Loading...</h1>;
  }

  let newcategory = [];
  const result = productsData.filter((el) => {
    if (!newcategory.includes(el.category.name)) {
      newcategory.push(el.category.name);
    }
  });

  const getCategoryProduct = (e) => {
    setinsvible(false);
    const filterCategoriay = productsData?.filter(
      (el) => el.category.name === e.target.innerText
    );
    setFilterData(filterCategoriay);
  };

  // if (productinfoData === null) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <div className="container">
        <div className="Hero">
          <div className="Categoty-Hero">
            <h2>CATEGORIES</h2>
            <li id="Computers">Computers</li>
            {newcategory?.map((el) => (
              <div key={el.id} className="Category">
                <li onClick={getCategoryProduct}>{el}</li>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            ></div>
            <div className="Help-Hero">
              <p>Help</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          
          <Detail  params={params.id}/>
        </div>
        <div className="Cards">
          <h2>Trending</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              flexWrap: "wrap",
              gap: 10,
              width: 1100,
              margin: "0 auto",
            }}
          >
            {filterData
              ?.map((el) => (
                <div key={el.id}>
                  <Card
                    {...el}
                    el={el}
                    images={el.images[0]}
                    category={el.category.name}
                  />
                </div>
              ))
              .slice(0, 4)}
            {insvible &&
              productsData?.map((el) => (
                  <div key={el.id}>
                    <Card
                      {...el}
                      el={el}
                      images={el.images[0]}
                      category={el.category.name}
                    />
                  </div>
                ))
                .slice(0, 4)}
          </div>
          <p>
            <button>See more</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
