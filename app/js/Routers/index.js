import React from "react";
import {HashRouter,BrowserRouter,Route,Switch} from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../Common/Loading";

// import App from "../Container/App";
// import Home from "../Container/Home";
// import List from "../Container/List";
// import Detail from "../Container/Detail";
const source={
    App:()=>import("../Container/App"),
    Home:()=>import("../Container/Home"),
    List:()=>import("../Container/List"),
    Detail:()=>import("../Container/Detail")
};
// const source={
//     App:"../Container/App",
//     Home:"../Container/Home",
//     List:"../Container/List",
//     Detail:"../Container/Detail"
// };
const lazyloadComponent=(component)=>(props)=>{(Loadable({loader: () => source[component](),loading:Loading}))};
// const lazyloadComponent=(component)=>(props)=>{(Loadable({loader:require.context(source[component]),loading:Loading}))};

const Routers=()=>(
    <HashRouter>
        <Switch>
            <Route path="/home" component={lazyloadComponent("Home")()}></Route>
            <Route path="/list" component={lazyloadComponent("List")()}></Route>
            <Route path="/detail" component={lazyloadComponent("Detail")()}></Route>
            <Route path="/" exact={true} component={lazyloadComponent("App")()}></Route>
        </Switch>
    </HashRouter>
);

export default Routers;