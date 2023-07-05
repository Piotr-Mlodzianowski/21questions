import {Outlet} from "react-router-dom";
import React from "react";
import Menu from "./menu";

const Dashboard = () => {

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
}

export default Dashboard;