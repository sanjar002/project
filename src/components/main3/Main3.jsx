import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlices";
import Card from "../card/Card";

const Main3 = () => {
  // const [filterData, setFilterData]= useState()
  const { productsData, isLoading, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (productsData === null) {
    return <h1 style={{textAlign:"center", color:"white"}}>Loading...</h1>;
  }

  const filterData = [];

  const filterDataprice = productsData
    .slice(0, 10)
    .filter((el) => el.price < 100);

  filterData.push(...filterDataprice);

  return (
    <section>
      <div className="container">
        <div className="Cards">
          <h2>Less than 100$</h2>
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
              .map((el) => (
                <div key={el.id}>
                  <Card
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
    </section>
  );
};

export default Main3;
