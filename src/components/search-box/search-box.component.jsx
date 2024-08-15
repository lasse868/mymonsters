import { Component } from "react";
import "./search-box.styles.css";



class SearchBox extends Component{
    render(){
        const {onSearchChangeHandler}=this.props
        return(
            <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChangeHandler}/>
        )
    }
}


export default SearchBox;