import React, { useContext } from "react";
// import AuthContext from "../context/AuthContext";
// import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
// import { Store } from "../Store";
// import { Badge } from "react-bootstrap";

const Header = () => {
  // const { user } = useContext(AuthContext);
  // const { state } = useContext(Store);
  // const { cart } = state;
  return (
    <header
      className="d-flex justify-content-between align-items-center py-3 px-4"
      style={{ background: "linear-gradient(to right, #214956 , #498459)" }}
    >

      <h1 className="m-2 text-white " style={{ paddingLeft: "25px" }}>
        Southern Agro
      </h1>

    </header>
  );
};

export default Header;
