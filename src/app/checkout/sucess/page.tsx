import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-background-secondary h-screen ">
            <div className="flex flex-col items-center justify-center  ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={500} height={500} />
                <h1 className=" font-bold  font-title text-polkadot-rose md:text-4xl">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-4 gap-4  text-white leading-loose">
                <div className="font-normal">

                    </div>
                    <div>
                        <p>Cadastro concluído!</p>
                        <p className="mt-2">Apresente essa mensagem para retirar seus brindes..</p>
                    </div>

            </div>

        </Area>
    )
}
