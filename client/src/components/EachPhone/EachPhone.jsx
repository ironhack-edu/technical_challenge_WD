import { Card } from 'react-bootstrap'

const EachPhone = ({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) => {

    return (
        <>
            <Card>
                <h1>{name}</h1>
                <hr />
                <p>{manufacturer}</p>
                <p>{description}</p>
                <p>{color}</p>
                <p>{price}</p>
                <img src={`../../assets/${imageFileName}`} alt={imageFileName} />
                <p>{screen}</p>
                <p>{processor}</p>
                <p>{ram}</p>
            </Card>
        </>
    )
}

export default EachPhone