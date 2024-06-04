import Area from "@/app/components/Area";
import Image from 'next/image';


export default function Networking() {
    return (

        <Area className="bg-background-terciary ">
            <div
                className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-20 mb-20 ">

                <div className="flex font-background text-polkadot-rose  text-base opacity-80  font-black lg:text-5xl md:text-4xl">
                    <p>O QUE É O CONNECT WEEK?</p>
                </div>


                <div className="flex-col leading-loose mt-6v">
                    <p className="hidden lg:block">Criada para fortalecer o ecossistema de inovação tecnológica brasileiro e  conectar instituições, empresas, startups, investidores e entusiastas de tecnologia em uma rede vibrante de networking. Desde 2023, tem sido palco de encontros impactantes, apresentando workshops, palestras e sessões de networking que destacam as últimas tendências e inovações. Em 2024, com o apoio do Governo do Paraná, o evento expandirá seus horizontes, consolidando-se como pioneiro da inovação. Prepare-se para esta jornada.</p>
                    <p className="lg:hidden">Criada para fortalecer a inovação tecnológica e conectar instituições, empresas, startups, investidores e entusiastas em uma vibrante rede de networking. Desde 2023, promove encontros impactantes, workshops, palestras e sessões de networking que destacam as últimas tendências tecnológicas.</p>
                </div>

                <div className="mt-8">
                    <iframe className="hidden lg:block" width="820" height="472.5"
                            src="https://www.youtube.com/embed/pBgw5LWy0HU?si=oQffNUSET7kt67K9"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe className=" hidden md:block lg:hidden" width="470" height="280"
                            src="https://www.youtube.com/embed/pBgw5LWy0HU?si=oQffNUSET7kt67K9"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe className="  md:hidden" width="380" height="236"
                            src="https://www.youtube.com/embed/pBgw5LWy0HU?si=oQffNUSET7kt67K9"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

        </Area>
    )
}