import axios from "axios";
import { useEffect, useState } from "react";

export default function List({setDetails}) {
  const [phones, setPhones] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5005/phones/")
      .then((res) => {
        setPhones(res.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);

  function clickHandler (phoneInfo) {
    setDetails(phoneInfo)
  }

  return (
    <div>
      {!loading &&
        phones.map((phone) => {return (
          <div key={phone.id}>
          <button onClick={()=>clickHandler(phone)} type="button" className="btn btn-primary">{phone.name}</button>
            <h2></h2>
            <p></p>
          </div>)
      })}
    </div>
  );
}
