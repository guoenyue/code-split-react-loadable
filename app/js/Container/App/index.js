import React,{Component} from "react";

// const App=()=>(<div>App</div>);

class App extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log(this.props);
    }

    render(){
        return (<div>App</div>);
    }

}

export default App;