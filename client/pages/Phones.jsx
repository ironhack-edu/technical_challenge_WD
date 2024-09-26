import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../core/constants";
import { NavLink } from "react-router-dom";
import { Flex } from "antd";

function Phones() {
  const [phones, setPhones] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
        debugger;
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Loading...";
  }
  debugger;

  return (
    <Flex vertical={true} gap="middle">
      {phones.map((phone) => (
        <NavLink key={phone.id} to={`/phones/${phone.id}`}>
          <span>{phone.name}</span>
        </NavLink>
      ))}
    </Flex>
  );
}

export default Phones;
