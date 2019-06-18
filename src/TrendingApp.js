import React from 'react';
import './App.css';
import TrendingSearch from './TrendingSearch';
import axios from 'axios';


const API_Key = `${process.env.REACT_APP_API_KEY}`;



class TrendingApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      autoim:[]
    }
  }

  randomGiph =() =>{
    
    //let autoRef = event.target[0].value;
    

    axios.get('http://api.giphy.com/v1/gifs/trending?api_key='+API_Key)
    .then((resolve) => {
      this.setState({autoim:resolve.data.data})
      //console.log(some);
    })
    .catch((err)=> console.log(err));
   


  }
 
 
 
  componentDidMount(){
    this.randomGiph();
  }
 
  render (){
   // console.log(hello);

   let obelem = [];
   obelem = this.state.autoim.map(picture =>(<img src ={picture.images.fixed_height.url}></img>))
    return(
      <div class = "mainTren">
          
                <div class = "trendWords">
                    <br></br>
                    <h3>#Trending</h3>
                    
                </div>
          



                <div class = "trendPics">
                {obelem}
                </div>
          
    
       </div>
      
      

   );

  }
}

export default TrendingApp;


