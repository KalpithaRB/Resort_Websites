
import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./footerc1";
import './Footer.css';
import Button from "./Button.js";

const Footer = () => {
return (
	<div className="Box">
	{/* <h1 style={{ color: "green",*
				textAlign: "center",
				marginTop: "-50px" }}
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<div className="Container">
		<div className="Row">
		<div className="Column">
			<div className="Heading">About Us</div>
			<div className="FooterLink" href="#">Things to add</div>
			<div className="FooterLink" href="#">Things to add</div>
			<div className="FooterLink" href="#">Testimonials</div>
		</div>
		<div className="Column">
			<div className="Heading">Hotel Information</div>
			<div className="FooterLink" href="#">Writing</div>
			<div className="FooterLink" href="#">Internships</div>
			<div className="FooterLink" href="#">Coding</div>
			<div className="FooterLink" href="#">Teaching</div>
		</div>
		<div className="Column">
			<div className="Heading">Help Center</div>
			<div className="FooterLink" href="#">Things to add</div>
			<div className="FooterLink" href="#">Things to add </div>
			<div className="FooterLink" href="#">Things to add</div>
			<div className="FooterLink" href="#">Things to add</div>
		</div>
        <div className="Column">
            <div className="Subscibe-option">
                <Button color="blue" name="Subscribe" />
            </div>
        </div>


		<div className="Column">
			<div className="Heading">Social Media Links</div>
			<div className="FooterLink" href="#">
			<i className="facebook">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</div>
			<div className="FooterLink" href="#">
			<i className="youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</div>
		</div>
        <p className="copyright-notice" style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Copyright Notice
	</p> 
		</div>
	</div>
	</div>
);
};
export default Footer;
