import "./HomePage.css";

import { useState, useEffect } from "react";

import PhonesList from "../components/PhonesList";
import PhoneDetails from "../components/PhoneDetails";

import axios from "axios";
const API_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5005';

function HomePage() {
  console.log("rendering or re-rendering HomePage");

  const loadingTimeSimulation = 2000;

  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = useState(null);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);

  const callbackSetPhone = async (phoneId) => {
    // setPhone(phones.filter(phone => phone.id === phoneId)[0]) // without calling the API again...

    // calling the API again...
    setIsPhoneLoading(true);
    // SOLUTION 2 TO SIMULATE A LOADING TIME
      const promiseTimeout = new Promise(resolve => setTimeout(() => resolve(), loadingTimeSimulation))
      const promiseAxios = axios.get(`${API_URL}/phones/${phoneId}`);
      try {
        const values = await Promise.all([promiseTimeout, promiseAxios])
        setIsPhoneLoading(false);
        // const response = await promiseAxios; // to get the value that the promise is resolved with
        // setPhone(response.data);
        setPhone(values[1].data); // or directly
      } catch (e) {
        console.log("Error getting phone: ", e);
      }
  }

  const getAllPhones = async () => {
    // SOLUTION 1 TO SIMULATE A LOADING TIME
    try {
      let response;
      let timeoutId = setTimeout(() => {
        response && setPhones(response.data);
        timeoutId = 0;
      }, loadingTimeSimulation)
      response = await axios.get(`${API_URL}/phones`);
      !timeoutId && setPhones(response.data);
    } catch (e) {
      console.log("Error getting all phones: ", e);
    }
  }

  useEffect(() => {
    console.log("useEffect HomePage")
    getAllPhones();
  }, []);

  return <div className="HomePage">
    <PhonesList phones={phones} callbackSetPhone={callbackSetPhone} />
    {/* <hr /> */}
    {
      // conditional rendering using short-circuit evaluation
      // with logical AND (returns first falsy operand, last otherwise)
      // and logical OR (returns the first truthy operand, last otherwise)
      // parenthesis required because logical AND operator as a +1 precedence over logical OR operator!
      (phone || isPhoneLoading) && <PhoneDetails phone={phone} isPhoneLoading={isPhoneLoading} />
    }
  </div>
}

export default HomePage;