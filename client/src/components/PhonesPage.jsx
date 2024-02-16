import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function PhonesPage({ phones }) {
  return (
    <div>
      <h1>Phones</h1>
      <Card>
        <Card.Body>
          <ul>
            {phones.map((phone) => {
              return (
                <li key={phone.id}>
                  <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PhonesPage;
