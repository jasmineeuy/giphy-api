import React from 'react';
import './App.css';
import SearchField from './SearchField';
import axios from 'axios';


const API_Key = `${process.env.REACT_APP_API_KEY}`;




class SearchApp extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        img : [],
      }
    }
    elemGiph = () =>{

    }
   
  
   searchGiph = (event) => {
      event.preventDefault();
      let userInput =event.target[0].value;
      console.log(userInput);
      
     console.log(API_Key);
     let some =axios.get('http://api.giphy.com/v1/gifs/search?q='+ userInput +'&api_key='+API_Key)
    
      .then((resolve) => {
        this.setState({img:resolve.data.data})
        console.log(some);
      })
      .catch((err)=> console.log(err));
    }
   
    render (){
     // console.log(hello);
  
     
     let elem =[];
     elem = this.state.img.map(( pic) =>(<img src={pic.images.downsized_large.url}></img>))
    //chanegd the above need to see if it workss
      return(
        <div class = "maincontent">
  
                  
  
  
                  <div class ="pSearch">
                    <h2>Search</h2>
                  </div>
           
          
                  <div class ="myforms">
             
                    <form class="thing" onSubmit= {this.searchGiph}>
              
                      <input type ="text"/>
                      <br></br>
                      
                     
                    </form>
                    
                  </div>

                  <div class = "searchPics">
                    
                  {elem}

                  </div>
            
            
        
         </div>
        
        
  
     );
  
    }
  }
  
  export default SearchApp;
  
  
  