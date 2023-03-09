export function ServiceItem({src, title, description}) {
    return (
        <div className={`service-item ${src === 2? "arch":""}`}>
                <img src={src === 2? "../img/interior.svg":src === 3? "../img/architecture.svg":"../img/planning.svg"} alt="item" />
                <h1>{title}</h1>
                <p>{description}</p>
        </div>
    )
}