import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-background-secondary h-screen">
            <div className="flex flex-col items-center justify-center  ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={500} height={500} />
                <h1 className="text-xl font-bold  font-title text-polkadot-rose ">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-8 gap-4 text-lg text-white">
                <div>ERRO!</div>
                <div>
                    Houve algum erro no processamento da sua solicitação. Por favor, confira seus dados e tente novamente.
                    </div>

            </div>

        </Area>
    )
}
