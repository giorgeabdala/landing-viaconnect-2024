import Area from "@/app/components/Area";
import Modals from "@/app/components/Modals";
import Image from "next/image";
import smartCity from "/public/photos/logoSmartCity.png";



export default function Ticket() {
    return (
        <Area className="bg-background-primary">
            <div id="ticket" className="grid grid-cols-1 lg:grid-cols-3 mt-20 mb-20 justify-items-center lg:justify-items-center">
                <div className="flex items-center">
                    <Image className="w-auto h-auto max-w-xs" src={smartCity} alt={"logo da Blockchain Festival"} />
                </div>
                <div className="flex justify-center mt-20 lg:mt-0 lg:col-span-2">
                    <div className="flex flex-col  justify-center font-body text-justify leading-loose text-2xl text-zinc-100 gap-4">

                        <p>
                            Garanta seu ingresso para o SmartCity Curitiba 2024 e tenha a chance de
                            estar no coração das discussões sobre inovação e cidades inteligentes.
                        </p>
                        <p>Para realizar sua inscrição clique no botão abaixo e siga as instruções na próxima tela. </p>
                        <div className="flex justify-center mt-8">
                            <Modals />
                        </div>
                    </div>
                </div>
            </div>
        </Area>

    )



}