import React from "react";
import withAuth from "../../components/higher-order/withauth";

function Dashboard() {
    return <div>Dashboard</div>;
}

export default withAuth(Dashboard);
