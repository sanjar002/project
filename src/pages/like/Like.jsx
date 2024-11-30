import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/productSlices';
import { calculateTatol, decrementQuantity1, incrementQuantity1, removeFromFavorites } from '../../store/slices/favorite';


const Like = () => {
    const { favoriteData, total } = useSelector((state) => state.like);
    // console.log(favoriteData);
    const { productsData, isLoading, error } = useSelector(
      (state) => state.product
    );
    
 
// eqfq
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    useEffect(() => {
        dispatch(calculateTatol());
      }, [favoriteData,dispatch]);
    const removeFromFavoritesHandler = (id) => {
        dispatch(removeFromFavorites( id ));
    };
    const handleIncrement = (id) => {
        dispatch(incrementQuantity1({id}));
      };
    
      const handleDecrement = (id) => {
        dispatch(decrementQuantity1({id}));
      };

  
    if (productsData === null) {
      return <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>;
    }
  
    let newcategory = [];
    const result = productsData.filter((el) => {
      if (!newcategory.includes(el.category.name)) {
        newcategory.push(el.category.name);
      }
    });
  
    const getCategoryProduct = (e) => {
      const filterCategoriay = productsData?.filter(
        (el) => el.category.name === e.target.innerText
      );
    };
    return (
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
          {/*  */}
          <div className="bsaket-all">
            
            <div className="basket">
              <h1>Your favorite</h1>
              <div className="card-basket">
                {favoriteData.map((el) => (
                  <div className="card-basket-in" key={el.id}>
                    <div className="img-title-basket">
                      <img src={el.images[0]} alt="" />
                      <div style={{marginTop:10}}>
                        <h4>
                          {el.title.length > 15
                            ? `${el.title.slice(0, 15)}...`
                            : el.title}
                        </h4>
                        <p>{el.category.name}</p>
                      </div>
                    </div>
                    <div className="price-count">
                      <h3 style={{marginLeft:-70, marginRight:30}}>{el.price}$</h3>
                      <button onClick={()=>handleDecrement(el.id)}>{el.count === 1 ? <i class="bi bi-trash-fill" onClick={()=>removeFromFavoritesHandler(el.id)}></i> : "-"}</button>
                    <span>{el.count}</span>
                    <button onClick={()=>handleIncrement(el.id)}>+</button>
                    </div>
                    <div className="total-del">
                      <h3>{el.price * el.count}$</h3>
                      <button onClick={()=>removeFromFavoritesHandler(el.id)}>
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="tatol-end">
                <h2>TOTAL PRICE: <span>{total}$</span></h2>
                <button>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Like