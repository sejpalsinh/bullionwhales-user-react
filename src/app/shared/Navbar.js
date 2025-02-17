import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSideBar } from "../context/SideBarContext";

const Navbar = () => {
	const [status, setStatus] = useState(false);
	const { isDarkTheme } = useTheme();
	const { toggleSideBar } = useSideBar();
	const resetPassword = () => {
		setStatus(true);
	};

	const handleStateChange = () => {
		setStatus(false);
	};

	const toggleOffcanvas = () => {
		document.querySelector(".sidebar-offcanvas").classList.toggle("active");
	};

	const logout = () => {
		localStorage.removeItem("ipo_access_token");
		const { hostname } = window.location;
		// window.location.href = "https://" + hostname + "/admin/";
	};

	return (
		<>
			<nav className="navbar p-0 fixed-top d-flex flex-row">
				<div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
					<Link className="navbar-brand brand-logo-mini" to="/">
						<img
							src={require("../../assets/images/portal_mini.png")}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch justify-content-end">
					<button
						className="navbar-toggler align-self-center"
						type="button"
						onClick={() => {
							document.body.classList.toggle("sidebar-icon-only");
							toggleSideBar();
						}}
					>
						<span className="mdi mdi-menu"></span>
					</button>
					<ul className="navbar-nav navbar-nav-right">
						<Dropdown as="li" className="nav-item">
							<Dropdown.Toggle
								as="a"
								className="nav-link cursor-pointer no-caret"
							>
								<div className="navbar-profile">
									<p className="mb-0 navbar-profile-name">
										Admin
									</p>
									<i className="mdi mdi-menu-down"></i>
								</div>
							</Dropdown.Toggle>

							<Dropdown.Menu
								className={`navbar-dropdown preview-list navbar-profile-dropdown-menu ${isDarkTheme && "dark-dropdown-menu"
									}`}
							>
								<Dropdown.Item
									onClick={resetPassword}
									className="preview-item"
								>
									<div className="preview-thumbnail">
										<div className="preview-icon bg-dark rounded-circle">
											<i className="mdi mdi-key-change text-warning"></i>
										</div>
									</div>
									<div className="preview-item-content">
										<p
											className="preview-subject mb-1"
											style={{ whiteSpace: "pre-wrap", color: "#344767" }}
										>
											Reset Password
										</p>
									</div>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item onClick={logout} className="preview-item">
									<div className="preview-thumbnail">
										<div className="preview-icon bg-dark rounded-circle">
											<i className="mdi mdi-logout text-danger"></i>
										</div>
									</div>
									<div className="preview-item-content">
										<p className="preview-subject mb-1" style={{ color: "#344767" }}>
											Log Out
										</p>
									</div>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</ul>
					<button
						className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
						type="button"
						onClick={toggleOffcanvas}
					>
						<span className="mdi mdi-format-line-spacing"></span>
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;