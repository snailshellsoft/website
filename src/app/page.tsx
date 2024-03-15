'use client'
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import LogoGrid from "@/components/ui/LogoGrid";
import CenteredCTAText from "@/components/ui/CenteredCTAText";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import Stats from "@/components/ui/Stats";
import FAQs from "@/components/ui/FAQs";
import FooterCTA from "@/components/ui/FooterCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <LogoGrid/>
            <CenteredCTAText/>
            <CTA/>
            <Features/>
            <Stats/>
            <FAQs/>
            <FooterCTA/>
            <Footer/>
        </>
    );
}
