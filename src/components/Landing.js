import { Hero } from "./Hero";
import { OurService } from "./OurService";
import { AboutUs } from "./AboutUs";
import { TwentyYears } from "./TwentyYears";
import { ClientsSays } from "./ClientsSays";
import { SingUp } from "./SingUp";
import { LatestNews } from "./LatestNews";
import { CompletedWork } from "./CompletedWork";


export function Landing() {
    return (
        <>
            <Hero />
            <OurService />
            <AboutUs />
            <TwentyYears />
            <CompletedWork />
            <ClientsSays />
            <LatestNews />
            <SingUp />

        </>
    )
}