import React from "react";
import {HashRouter,BrowserRouter,Route,Switch} from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../Common/Loading";

//同步引入组件,不chunk
// import App from "../Container/App";
// import Home from "../Container/Home";
// import List from "../Container/List";
// import Detail from "../Container/Detail";

//异步引入组件,会被chunk
const source={
    App:()=>import("../Container/App"),
    Home:()=>import("../Container/Home"),
    List:()=>import("../Container/List"),
    Detail:()=>import("../Container/Detail")
};
const lazyloadComponent=(component)=>(Loadable({loader: () => source[component](),loading:Loading}));

//测试通过变量require,但是报错,require.context不是一个函数
// const source={
//     App:"../Container/App",
//     Home:"../Container/Home",
//     List:"../Container/List",
//     Detail:"../Container/Detail"
// };
// const lazyloadComponent=(component)=>(props)=>{(Loadable({loader:(console.log(require),true)&&require.context(source[component],false,/\.jsx?/i),loading:Loading}))};

const Routers=()=>(
    <HashRouter>
        <Switch>
            <Route path="/home" component={lazyloadComponent("Home")}></Route>
            <Route path="/list" component={lazyloadComponent("List")}></Route>
            <Route path="/detail" component={lazyloadComponent("Detail")}></Route>
            <Route path="/" exact={true} component={lazyloadComponent("App")}></Route>
        </Switch>
    </HashRouter>
);

export default Routers;