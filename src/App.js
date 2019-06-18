import React from 'react';
import './App.css';

import TrendingApp from './TrendingApp';
import SearchApp from './SearchApp';


class App extends React.Component {

 
  render (){
    return(
     
      <div class = "main">
         <header>
          <h1>Giphy</h1> 
           </header>

       

        <div class ="Search">
          <SearchApp />

        </div>

        <div class = "Trends">
            <TrendingApp />
        </div>
        <br></br>

        <div clas ="foot">
          <footer>Giphs are fun!</footer>
        </div>
          
          
      
       </div>
      
      

   );

  }
}

export default App;


