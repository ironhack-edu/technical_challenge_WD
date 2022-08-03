import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Beer  (props) {
const [beers, setBeers] = useState([]);


  const params = useParams();
  const beerId = params.beerId ;
  // This effect depends on `props.projects`.
  // It will run on initial render and every time
let direction="https://ih-beers-api2.herokuapp.com/beers/"+beerId;
 console.log(direction)

useEffect(() => {
    axios
      .get(direction)
      .then((response) => {
      
        setBeers(response.data);
         
      });
  }, []);

 console.log(beers)
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxheight:"300px",
  allignItem:"left",
    overflow: 'scroll',
     
  };
console.log()

 return (
<div>
<div className="col-5" style={{mystyle}}>
            <div className="list-group"style={{height:'500px',overflow: 'scroll'}}>
           
            {
                
      

    
        
            <div>
             <img className="imgtmbl" src={beers.image_url}/> 
           <h4>{beers.name}</h4>
           <h6>{beers.tagline}</h6>
           <h6>Created By:{beers.tagline}</h6>
           <h6>{beers.description}</h6>
           <h6>First brewed{beers.first_brewed}</h6>
           <h6>{beers.food_pairing}</h6>
            </div>    
      }
             
             
           
              
            </div>
</div>
</div>
)
}

export default Beer ;