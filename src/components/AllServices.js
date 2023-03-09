import Data from "./data.json";

export function AllServices() {
    return (
        <div className="all-services">
            <div className="all-services__item">
                <img src="../img/interior.svg" alt="interior design" />
                <h1>{Data.interior[0].title}</h1>
                <p>{Data.interior[0].description}</p>
            </div>
            <div className="all-services__item">
                <img src="../img/architecture.svg" alt="interior design" />
                <h1>{Data.architecture[0].title}</h1>
                <p>{Data.architecture[0].description}</p>
            </div>
            <div className="all-services__item">
                <img src="../img/planning.svg" alt="interior design" />
                <h1>{Data.planning[0].title}</h1>
                <p>{Data.planning[0].description}</p>
            </div>
        </div>
    )
}