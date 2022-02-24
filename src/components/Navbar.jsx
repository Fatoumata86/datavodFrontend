import React from "react";
import logo from "../assets/Logo/logoBlackfavicon.ico";
import "./Navbar.css";

export default function Navbar(props) {
	return (
		<div>
			<nav className="navbar navbar-light navColor fixed-top">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="d-flex me-auto px-4">
						<a className="navbar-brand" href="#">
							<img
								className="logo"
								src={logo}
								alt="logo of dataVod"
							/>
						</a>
					</div>
					<div
						className="offcanvas offcanvas-start navColor"
						tabindex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-header">
							<button
								type="button"
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
							<a className="navbar-brand" href="#">
								<img
									className="logo"
									src={logo}
									alt="logo of dataVod"
								/>
							</a>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
								<li className="nav-item">
									<a className="nav-link " to="/">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" to="/videos/all">
										All Videos
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" to="/videos/all">
										All Users
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="d-flex">
						<a className="icon-playlist icon-black me-4">
							<ion-icon name="logo-youtube"></ion-icon>
						</a>
						<a className="icon-connection icon-black me-4">
							<ion-icon name="person"></ion-icon>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
