import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history, path }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        { isAuthenticated() && (
          <li className="nav-item">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
          
        )}

        
        { isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              dashboard
            </Link>
          </li>
        )}
        { isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/order")}
              className="nav-link"
              to="order"
            >
              orders
            </Link>
          </li>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/pre")}
              className="nav-link"
              to="pre"
            >
             Prediction
            </Link>
          </li>
        )}

        {!isAuthenticated() && (                            //if the user is not authenticated then show this.
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              onClick={() => {
                signout(() => {
                  history.push("/");                      //redirecting user to homepage.We can use redirect here also.
                });
              }}
              className="nav-link text-warning"
            >
              Signout
            </span>
          </li>
        )}
        
      </ul>
    </div>
  );
};

export default withRouter(Menu);