import { Link } from "react-router-dom"
import PageLoader from "../components/PageLoader"


function HomePage({ displayedPhones }){
    console.log(displayedPhones)

    return(
        <div className="container"> 
            <h1 className="centered"><span>ThePhoneCave</span>Phones</h1>

            <div className="cards-container flex">
                {displayedPhones.length !== 0 ? (
                    displayedPhones.map((elm, index) => {
                        return(
                            <Link to={`/phones/${elm.id}`} className="card" key={index}>
                                <h2>{elm.name}</h2>
                                <img src={`/images/${elm.imageFileName}`} alt="" />
                            </Link>
                        )
                    })
                ) : (
                    <PageLoader />
                )}
            </div>
        </div>
    )
}

export default HomePage