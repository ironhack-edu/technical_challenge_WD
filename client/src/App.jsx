import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Detail from "../components/detail";
import List from "../components/list";

function App() {
  const [details, setDetails] = useState(null);
  const [phones, setPhones] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5005/phones/")
      .then((res) => {
        setPhones(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function clickHandler(phoneInfo) {
    if (details == phoneInfo) {
      setShow(!show)
    } else {setDetails(phoneInfo)
      setShow(true)
    }
  }

  return (
    <>
      {/* <div className="main"> */}
      <div>
        {!loading &&
          phones.map((phone) => {
            return (
              <div key={phone.id}>
                <button onClick={() => clickHandler(phone)} type="button" className="btn btn-primary">
                  {phone.name}
                </button>
                {details && details.name==phone.name && show==true && <Detail phoneDetails={details} />}
              </div>
            );
          })}
          </div>
      {/* </div> */}
    </>
  );
}

export default App;
