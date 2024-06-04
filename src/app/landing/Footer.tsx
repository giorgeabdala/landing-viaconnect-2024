import Area from "@/app/components/Area";
import SocialMedia from "@/app/components/SocialMedia";
import Link from "next/link";


export default function Footer() {

    return (
        <Area className="bg-background-terciary">

            <div id="footer" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-20">
                <div id="contatos" className="flex flex-col gap-4 text-gray-400">
                    <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-polkadot-rose">Polkadot Brasil</h1>

                    <div className="flex flex-col mt-4">
                        <SocialMedia />
                    </div>

                    <div className="mt-12">

                        <Link href="https://www.google.com.br/maps/place/R.+Prof.+Pedro+Viriato+Parigot+de+Souza,+5300+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81280-330/@-25.4442869,-49.3561007,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce204a525ba01:0xafb13b2d6d87d65c!8m2!3d-25.4442869!4d-49.3561007!16s%2Fg%2F11cr_gdp2_?entry=ttu" >
                           <span className="inline-block p-3 text-polkadot-rose rounded-full bg-gray-800">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                  stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                                </span>

                        </Link>


                        <h2 className="mt-4 text-base font-medium text-polkadot-rose">Endereço do Connect Week Summit Curitiba:</h2>
                        <p className="mt-2 text-sm text-gray-400">Viasoft Experience e no Teatro Positivo</p>
                        <p className="mt-2 text-sm text-gray-400">R. Prof. Pedro Viriato Parigot de Souza, 5300 </p>
                        <p className="mt-2 text-sm text-gray-400">Cidade Industrial de Curitiba (CIC) – Curitiba, Paraná</p>
                    </div>

                </div>

                <div id="mapa">
                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 ">
                        <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight={0} marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8198145968413!2d-49.3561007!3d-25.4442869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce204a525ba01%3A0xafb13b2d6d87d65c!2sR.%20Prof.%20Pedro%20Viriato%20Parigot%20de%20Souza%2C%205300%20-%20Cidade%20Industrial%20de%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081280-330!5e0!3m2!1spt-BR!2sbr!4v1717520402222!5m2!1spt-BR!2sbr"></iframe>



                    </div>

                </div>

            </div>


        </Area>
    )
}