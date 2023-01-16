import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Rooms from "./Rooms";
import FrontScreen from "./FrontScreen";
import Checkout from "./Checkout";
import Menu from "./Menu";

interface RoutesProps {
}

const FrontRoutes = (props: RoutesProps) => {


    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
                    <FrontScreen  />
                    <Menu />
                </Route>
                <Route path={"/rooms"} exact>
                    <Rooms/>
                </Route>
                <Route path={"/checkout"} exact>
                    <Checkout/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default FrontRoutes;