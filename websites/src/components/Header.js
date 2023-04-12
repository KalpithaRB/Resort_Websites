import Button from "./Button.js";
import "./Header.css";

function Navcontent(title) {
  return (
    <div className="options">
      <div className="dropdown">
        <div className="dropbtn">{title.names}</div>
      </div>
      <div className="dropdown-content">
          <a href="/">{title.drop1}</a>
          <a href="/">{title.drop2}</a>
          <a href="/">{title.drop3}</a>
          <a href="/">{title.drop4}</a>
        </div>
    </div>
  );
}

function Options(title) {
  return (
    <div className="options">
      <div className="dropdown">
        <div className="dropbtn">
          <a href="/">{title.name}</a>
          </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="main-header">
      <h1 className="Logo">Logo</h1>
      <div className="header-navbar">
      <Options name="Home" />
      <Navcontent names="About Us" drop1="Client Review" />
      <Navcontent
        names="Accomodation"
        drop1="Deluxe Rooms"
        drop2="Superior Cottage"
        drop3="Premium Rooms"
        drop4="Garden View"
      />
      <Options name="Gallery" />
      <Options name="Amenities" />
      <Options name="Contact Us" />
      </div>
      <br />
      <div className="buttons-in-header">
        <Button color="red" name="Sign in" />
        <Button color="Black" name="Book Now" />
      </div>
      
    </div>
  );
}
