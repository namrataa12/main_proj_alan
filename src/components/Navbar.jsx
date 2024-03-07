import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../components/context/UserAuthContext";
const Navbar = ({setCategory}) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme = "dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">  
      <ul className="navbar-nav">        
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate("/home")}>Home</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("business")} >Bussiness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")} >Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export const Home_Navbar = ({setCategory}) => {
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top pb-0" background-color="be">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
          <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/News")}>Latest News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/contact")}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/about")}>About</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto"> 
          <li className="nav-item" style={{ paddingRight: '10px' }}>
          </li>
            <li className="nav-item" style={{paddingRight:'10px'}}>
              <Button className="btn-logout" variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar