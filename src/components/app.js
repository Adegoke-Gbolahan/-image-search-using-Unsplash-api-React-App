import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

class App extends React.Component {
    state ={images:[]};
    onSearchSubmit = async term =>{
       const res = await unsplash.get('/search/photos', {
            params:{query:term},
        });
        this.setState({images:res.data.results})
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmitNow={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
            );
    }
}

export default App