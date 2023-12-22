import { Button } from '@mui/material';


const Popover = (props) => {
    const {handleBlur, phone, setPhone, loadingPhoneSimulation, setLoadingPhoneSimulation} = props;


    const handleClose = () =>{
        handleBlur();
        setPhone(null);
        setLoadingPhoneSimulation(true);
    }

    return(
        <div className="popover">
            {loadingPhoneSimulation ? 
            <img className='loading' src="/loading.gif"/>
            :
            <div className="popover">
            <div className="phone-container">
                <img className="big-phone" src={`/${phone.imageFileName}`}></img>
            </div>
            <div className='phone-info'>
                <div>
                    <h1>{phone.name}</h1>
                    <p className='phone-description'>{phone.description}</p>
                    <hr></hr>
                    <p><span>Manufacturer:</span> {phone.manufacturer}</p>
                    <p><span>Price:</span> {phone.price}€</p>
                    <p><span>Processor:</span> {phone.processor}</p>
                    <p><span>Ram:</span> {phone.ram}GB</p>
                    <p><span>Screen:</span> {phone.screen}</p>
                </div>
                <div>
                    <Button id="close-button"  fullWidth color="maincolor" variant="contained" onClick={() => handleClose()}>Close</Button>
                </div>
            </div>
            <div>
            </div>
            </div>}

        </div>
    )

}

export default Popover;