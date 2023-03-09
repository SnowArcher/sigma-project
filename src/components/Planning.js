import Data from "./data.json";
import { ServiceItem } from "./ServiceItem";

export function Planning() {
    return (
        <div className="service-items">
            {Data["planning"].map((value, index) => {
                return <ServiceItem key={index}
                    src={3}
                    title={value.title}
                    description={value.description}
                />
            })}
        </div>
    )
}