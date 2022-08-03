import { useState, useEffect } from "react";
import axios from "axios";
function BeerList(props) {
  const[ phones, setPhones] = useState([]);
const[detPhone,setDetails] =useState(null);

  // This effect depends on `props.projects`.
  // It will run on initial render and every time










  useEffect(() => {
    axios
      .get("http://localhost:5005/phones/")
      .then((response) => {

        setPhones([...response.data]);
  
      });
  }, []);
  


  function  details(id){
    console.log("im here",id.target.id)
    
    axios
    .get("http://localhost:5005/phones/"+id.target.id)
    .then((response) => {
        setDetails(response.data);

    });
  } 






  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",

    allignItem: "center",
    overflow: 'scroll',

  };
  console.log()
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
{detPhone? (<div>
  <div>
                
                <img src={"http://localhost:5005/"+detPhone.imageFileName}/>
                <button id={detPhone.id} onClick={details}>DETAILS</button>
                  <h6>name: {detPhone.name}</h6>
                  <h6>description: {detPhone.description}</h6>
                  <h6>manufacturer: {detPhone.manufacturer}</h6>
                  <h6>price: {detPhone.price}</h6>
                  <h6>processor: {detPhone.processor}</h6>
                  <br/>  
  
                </div>

</div>):""}      
        <div className="list-group" style={{  }}>

          {phones.map((phone) => {


            console.log("arr", phone)






            return (
              <div>
                
              <img src={"http://localhost:5005/"+phone.imageFileName}/>
              <button id={phone.id} onClick={details}>DETAILS</button>
                <h6>name: {phone.name}</h6>
                <h6>description: {phone.description}</h6>
                <h6>manufacturer: {phone.manufacturer}</h6>
                <h6>price: {phone.price}</h6>
                <h6>processor: {phone.processor}</h6>
                <br/>  

              </div>
                      );

          })}




       
      </div>
     </div>
  )
}

export default BeerList;
