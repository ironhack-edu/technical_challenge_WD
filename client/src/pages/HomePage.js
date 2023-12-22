import { Link } from "react-router-dom"
import PageLoader from "../components/PageLoader"


function HomePage({ displayedPhones }){
    console.log(displayedPhones)

    return(
        <> 
            <h1>Phones in Homepage</h1>

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
        </>
    )
}

export default HomePage