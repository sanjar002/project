import React, { useEffect, useState } from "react";
import "../hero/Hero.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlices";
import Card from "../card/Card";
import Hero2 from "../hero2/Hero2";

const Hero = () => {
  const { productsData, isLoading, error } = useSelector(
    (state) => state.product
  );
  const [filterData, setFilterData] = useState();
  const [insvible, setinsvible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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

  return (
    <div>
      <div className="container">
        <div className="Hero">
          <div className="Categoty-Hero">
            <h2>CATEGORIES</h2>
            <li id="Computers">Computers</li>
            {newcategory.map((el) => (
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
          <Hero2 />
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
                  el={el}
                    {...el}
                    images={el.images[0]}
                    category={el.category.name}
                  />
                </div>
              ))
              .slice(0, 4)}
            {insvible &&
              productsData
                .map((el) => (
                  <div key={el.id}>
                    <Card
                    el={el}
                      {...el}
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

export default Hero;
