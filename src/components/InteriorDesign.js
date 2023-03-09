import Data from "./data.json";
import { ServiceItem } from "./ServiceItem";

export function InteriorDesign() {
    return (
        <div className="service-items">
            {Data["interior"].map((value, index) => {
                return <ServiceItem key={index}
                    src={1}
                    title={value.title}
                    description={value.description}
                />
            })}
        </div>
    )
}