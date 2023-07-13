import { useState } from "react";
import { Button, Card } from "react-bootstrap";


const PhoneCard = (props) => {
  const [showDetail, setShowDetail] = useState(false);


  return (
    <div className="wrapper">
      <Card className="Card phone-card">
        <div className="Card.Img imageFileName">{props.phone.imageFileName}</div>
        <div className="name">{props.phone.name}</div>
        <div className="price">{props.phone.price}</div>
        <Button
          className="m-3"
          variant="outline-warning"
          onClick={() => setShowDetail(!showDetail)}
        >
          {/* button to show Phone Detail */}
          {showDetail ? 'Hide Detail' : 'Show Detail'}
        </Button>
        {showDetail && (
          <>
            <div className="description">{props.phone.description}</div>
            <div className="color">{props.phone.color}</div>
            <div className="screen">{props.phone.screen}</div>
            <div className="processor">{props.phone.processor}</div>
            <div className="ram">{props.phone.ram}</div>
          </>
        )}
       
      </Card>
    </div>
  );
};

export default PhoneCard;