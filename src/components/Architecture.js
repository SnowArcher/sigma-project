import Data from "./data.json";
import { ServiceItem } from "./ServiceItem";

export function Architecture() {
    return (
        <div className="service-items">
            {Data["architecture"].map((value, index) => {
                return <ServiceItem key={index}
                    src={2}
                    title={value.title}
                    description={value.description}
                />
            })}
        </div>
    )
}