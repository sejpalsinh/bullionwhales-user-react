import React from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_VERSION } from "../../Util/constant";
import ThemeToggelSwitch from "./ThemeToggelSwitch";

const Sidebar = () => {
	const location = useLocation();

	const isPathActive = (path) => {
		return location.pathname.startsWith(path);
	};

	const onRouteChanged = () => {
		document.querySelector("#sidebar").classList.remove("active");
	};

	React.useEffect(() => {
		onRouteChanged();

		// Add hover effect for sidebar icon-only mode
		const body = document.querySelector("body");
		const navItems = document.querySelectorAll(".sidebar .nav-item");

		navItems.forEach((el) => {
			el.addEventListener("mouseover", () => {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.add("hover-open");
				}
			});
			el.addEventListener("mouseout", () => {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.remove("hover-open");
				}
			});
		});

		return () => {
			navItems.forEach((el) => {
				el.removeEventListener("mouseover", () => { });
				el.removeEventListener("mouseout", () => { });
			});
		};
	}, [location.pathname]);

	return (
		<nav className="sidebar sidebar-offcanvas fixed-sidebar" id="sidebar">
			<div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
				<a className="sidebar-brand brand-logo" href="index.html">
					<img src={require("../../assets/images/portal_long.png")} alt="logo" />
				</a>
				<a className="sidebar-brand brand-logo-mini" href="index.html">
					<img src={require("../../assets/images/portal_mini.png")} alt="logo" />
				</a>
			</div>
			<ul className="nav">
				<li className="nav-item nav-category">
					<span className="nav-link pb-0">
						User
						<span className="nav-link ml-2 py-0">
							[ {APP_VERSION} ]
						</span>
					</span>
				</li>
				<li className={isPathActive("/dashboard") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/dashboard">
						<span className="menu-icon">
							<i className="mdi mdi-speedometer"></i>
						</span>
						<span className="menu-title">
							Dashboard
						</span>
					</Link>
				</li>
				<li className="nav-item nav-category">
					<span className="nav-link pb-0">Account Management</span>
				</li>
				<li className={isPathActive("/usermanagement") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/usermanagement">
						<span className="menu-icon">
							<i className="mdi mdi-account"></i>
						</span>
						<span className="menu-title">
							User Management
						</span>
					</Link>
				</li>
				<li className={isPathActive("/copytradinggroups") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/copytradinggroups">
						<span className="menu-icon">
							<i className="mdi mdi-account-group"></i>
						</span>
						<span className="menu-title">
							Copy Trading Groups
						</span>
					</Link>
				</li>
				<li className={isPathActive("/group-plan") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/group-plan">
						<span className="menu-icon">
							<i className="mdi mdi-note-text"></i>
						</span>
						<span className="menu-title">
							Group Plans
						</span>
					</Link>
				</li>
				<li className={isPathActive("/ordermanager") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/ordermanager">
						<span className="menu-icon">
							<i className="mdi mdi-file-document-box-outline"></i>
						</span>
						<span className="menu-title">
							Order Manager
						</span>
					</Link>
				</li>
				<li className={isPathActive("/referral") ? "nav-item menu-items active" : "nav-item menu-items"}>
					<Link className="nav-link" to="/referral">
						<span className="menu-icon">
							<i className="mdi mdi-account-arrow-right"></i>
						</span>
						<span className="menu-title">
							Referral
						</span>
					</Link>
				</li>
				{/* Theme Settings */}
				<li className="nav-item menu-items">
					<div className="nav-link">
						<span className="menu-title">
							<ThemeToggelSwitch />
						</span>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
