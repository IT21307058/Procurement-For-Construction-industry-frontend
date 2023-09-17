import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import ToastContext from "../context/ToastContext";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsers,
  faMoneyBillAlt,
  faCalendarAlt,
  faFileAlt,
  faSignInAlt,
  faSignOutAlt,
  faTruck,
  faUserTie,
  faFolder,
  faClipboardList,
  faHome,
  faFileInvoice,
  faTachometerAlt,
  faUser,
  faGear,
  faUserPlus,
  faUsersGear,
  faGasPump,
  faTools,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
//   const { user, setUser } = useContext(AuthContext);
//   const { toast } = useContext(ToastContext);

  const sidebarRef = useRef(null); // create a ref to the sidebar element

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMouseEnter = () => {
    // set showSidebar to true when mouse enters the sidebar
    setShowSidebar(true);
  };

  const handleMouseLeave = () => {
    // set showSidebar to false when mouse leaves the sidebar
    setShowSidebar(false);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`sidenav${showSidebar ? " open" : ""}`}
        ref={sidebarRef} // set the ref to the sidebar element
        onMouseEnter={handleMouseEnter} // handle mouse enter event
        onMouseLeave={handleMouseLeave} // handle mouse leave event
      >
        <ul className="navbar-nav">
          <p className="nav-link">{dateTime.toLocaleString()}</p>
            <>
              <li className="nav-item">
                <Link to="/" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faChartBar}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/draftorderlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Draft Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addproduct" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Add The Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orderlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/approveorder" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Approve The Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/supplierproductlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Supplier Product
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/suppliersideproductlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Supplier Side Product
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/supplierorderlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Supplier Order
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/orderlistviewstaff" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Order List Staff
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/siteliststaff" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Site
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/invoicelist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Invoice
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/reciptlist" role="button" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Receipt
                </Link>
              </li>
              
              <li
                className="nav-item"
                // onClick={() => {
                //   setUser(null);
                //   localStorage.clear();
                //   toast.success("Logout Successful!");
                //   navigate("/login", { replace: true });
                // }}
              >
                <button className="btn btn-danger">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{ marginRight: "10px", color: "white" }}
                  />
                  Logout
                </button>
              </li>
            </>
          
        </ul>
      </div>
    </>
  );
};

export default Navbar;