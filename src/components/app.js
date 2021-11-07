import React from "react";
import SearchBar from "./searchBar";

class App extends React.Component {
    onSearchSubmit(term){
        console.log(term)
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmitNow={this.onSearchSubmit}/>
            </div>
            );
    }
}

export default App