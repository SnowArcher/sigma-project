import { Hero } from "./Hero";
import { OurService } from "./OurService";
import { AboutUs } from "./AboutUs";
import { TwentyYears } from "./TwentyYears";
import { ClientsSays } from "./ClientsSays";
import { SingUp } from "./SingUp";


export function Landing() {
    return (
        <>
            <Hero />
            <OurService />
            <AboutUs />
            <TwentyYears />
            <ClientsSays />
            <SingUp />

        </>
    )
}