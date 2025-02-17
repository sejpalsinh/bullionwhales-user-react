import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { is_dev_env } from "../../../Util/constant";

const withAuth = (WrappedComponent) => {
	const AuthWrapper = (props) => {
		const navigate = useNavigate();

		useEffect(() => {
			if (is_dev_env) {
				localStorage.setItem(
					"user_access_token",
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
				);
			} else {
				const token = localStorage.getItem("user_access_token");
				if (!token) {
					// navigate(LOGO_URL); // Uncomment if you have a login page
				}
			}
		}, []);

		return <WrappedComponent {...props} />;
	};

	return AuthWrapper;
};

export default withAuth;
