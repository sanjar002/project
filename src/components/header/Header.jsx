import React, { useEffect, useState } from "react";
import "../header/Header.css";
import logotip from "../../imgs/Vector (3).png";
import logtitle from "../../imgs/Vector (2).png";
import user from "../../imgs/user.svg";
import basket from "../../imgs/basket.svg";
import like from "../../imgs/like.svg";
import search from "../../imgs/search.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { getUser, loginUser } from "../../store/slices/loginSlice";
import { postUser } from "../../store/slices/authSlice";


const Header = ({ visible3, setisVisible3 }) => {
  const { cartData } = useSelector((state) => state.cart);
  const { favoriteData } = useSelector((state) => state.like);
  const user = useSelector((state) => state.login.accessToken);
  const { dataUser } = useSelector((state) => state.auth);


  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(postUser());
  }, []);

  useEffect(() => {
    dispatch(loginUser());
  }, []);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (user === null) {
    return <h1>Loading...</h1>;
  }

  const loOut = (e) => {
    location.reload();

    localStorage.removeItem("Token");
  };

  if (user) {
    setisVisible3(true);
  } else {
    setisVisible3(false);
  }

  console.log(user);
  console.log(dataUser);

  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <div className="Logotip-header">
              <img src={logotip} alt="logotip" />
              <img src={logtitle} alt="logotip-title" />
            </div>
          </NavLink>

          <div className="user-header">
            <div className="user-icon" onClick={() => setisVisible(true)}>
              <img
                style={{ width: 35, borderRadius: "100%" }}
                src={user?.avatar}
                alt=""
              />
            </div>
            <p>{user?.name}</p>
            {!visible3 && <p>Yana Tamkovich</p>}
            <div style={{ display: "flex", gap: 10 }}>
              <NavLink to={"signIn"}>
                {!visible3 && (
                  <Button
                    type="primary"
                    danger
                    ghost
                    onClick={() => changeSignIn()}
                  >
                    Sign In
                  </Button>
                )}
              </NavLink>
              <NavLink to={"/signUp"}>
                {!visible3 && (
                  <Button
                    type="primary"
                    danger
                    ghost
                    onClick={() => changeSignUp()}
                  >
                    Sign Up
                  </Button>
                )}
              </NavLink>
              {visible3 && (
                <Button type="primary" danger ghost onClick={loOut}>
                  Sign Out
                </Button>
              )}
            </div>
          </div>

          <div className="search-header">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search for anything..." />
          </div>

          <div className="basket-header">
            <NavLink className="Navlink" to={"like"}>
              <img src={like} alt="" />

              <span>{favoriteData.length > 0 && favoriteData.length}</span>
            </NavLink>
            <NavLink className="Navlink" to={"/cart"}>
              <img src={basket} alt="" />
              <span>{cartData.length > 0 && cartData.length}</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
