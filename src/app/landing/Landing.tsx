import Pagina from "@/app/components/Pagina";
import Header from "@/app/landing/Header";
import Logo from "@/app/landing/Logo";
import Presentation from "@/app/landing/Presentation";
import Networking from "@/app/landing/Networking";
import Schedule from "@/app/landing/Schedule";
import Ticket from "@/app/landing/Ticket";
import ButtonDefault from "@/app/components/Button";
import Footer from "@/app/landing/Footer";
import Matters from "@/app/landing/Matters";




export default function Landing() {
    return (
        <Pagina className="flex flex-col text-white">

            <Header />
            <Logo />
            <Presentation />
            <Matters />
               <Networking />
            <Schedule />


        {/*    <Ticket />*/}




            <Footer />
        </Pagina>
    )


}