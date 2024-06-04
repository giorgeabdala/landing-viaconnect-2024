import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Card from "@/app/components/Card";
import Workshops from "@/app/components/Workshops";
import Link from "next/link";


export default function Schedule () {
    return (
        <Area className="flex bg-background-viaconnect">

            <div className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20 leading-loose">
                <div className="flex text-white items-center justify-center font-background opacity-10 font-black text-5xl md:text-8xl lg:text-9xl">
                    <h1>Imperdível...</h1>
                </div>
                <p className="mt-4">Confira as palestras exclusivas da Polkadot Brasil que vão rolar no Connect Week Summit 2024:</p>

                <Workshops />

                <div className="flex flex-col mt-8 font-body gap-4">

                    <p>
                        Não perca essa oportunidade! </p>

                    <p>Confira
                       <span className="text-polkadot-rose"> <Link href="https://connectweek.com.br/agenda/"> aqui </Link> </span>
                        a programação completa da Connect Week Summit Curitiba 2024.</p>

                </div>
            </div>





      </Area>
    )

}