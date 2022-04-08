import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";
import logo from "../../img/ChefUp.png";

import { CartCard } from "./cartcard";
export const ChefNavbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="logo-container">
          <img className="img-fluid logo" src={logo} />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tutorial" className="nav-link">
                Tutorial
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/grocerylist" className="nav-link">
                Grocery List
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/randommeals" className="nav-link">
                Random Meals
              </Link>
            </li>

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => {
                // console.log(MealsInCart);
              }}
            >
              {/* Testing Cart{"(" + MealsInCart.length + ")"} */}
              <i class="fas fa-shopping-cart"></i>
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content text-black">
                  <div class="modal-header">
                    <h5
                      className="modal-title text-dark"
                      id="staticBackdropLabel"
                    >
                      Your Cart
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {/* <div class="row row-cols-3 gy-4"> */}
                    <div class="row gy-3">
                      {store.cart.map((meal, index) => {
                        return <CartCard meal={meal} />;
                      })}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

{
  /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
  <Link to="/">
    <span className="navbar-brand mb-0 h1">Home(logo here)</span>
  </Link>
  <div className="ml-auto">
    <Link to="/tutorial">
      <button className="btn btn-primary">How To</button>
    </Link>
  </div>

  <div className="ml-auto">
    <Link to="/signup">
      <button className="btn btn-primary">Sign Up</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/login">
      <button className="btn btn-primary">Login</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/grocerylist">
      <button className="btn btn-primary">Grocery List</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/randommeals">
      <button className="btn btn-primary">
        To Random Meals Page(in progress)
      </button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to={store.user ? `/profilepage/${store.user.username}` : ""}>
      <button className="btn btn-primary">Profile</button>
    </Link>
  </div>

  {/* Note to self: It's data-bs-toggle="dropdown" not data-toggle="dropdown". */
}
//   <div class="dropdown">
//     <button
//       class="btn btn-info dropdown-toggle"
//       type="button"
//       id="dropdownMenu2"
//       data-bs-toggle="dropdown"
//       aria-haspopup="true"
//       aria-expanded="false"
//     >
//       Sample "Menu?"
//     </button>
//     <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
//       <Link to="/tutorial">
//         <button class="dropdown-item" type="button">
//           How To
//         </button>
//       </Link>
//       <Link to="/grocerylist">
//         <button class="dropdown-item" type="button">
//           Grocery List
//         </button>
//       </Link>
//       <Link to="/randommeals">
//         <button class="dropdown-item" type="button">
//           {" "}
//           To Random Meals Page(in progress)
//         </button>
//       </Link>
//       <Link to="/profilepage/user">
//         <button class="dropdown-item" type="button">
//           {" "}
//           Profile
//         </button>
//       </Link>
//     </div>
//   </div>

//   <button
//     type="button"
//     className="btn btn-primary"
//     data-bs-toggle="modal"
//     data-bs-target="#staticBackdrop"
//     onClick={() => {
//       // console.log(MealsInCart);
//     }}
//   >
//     {/* Testing Cart{"(" + MealsInCart.length + ")"} */}
//     <i class="fas fa-shopping-cart"></i>
//   </button>

//     </div>
//   </div>
