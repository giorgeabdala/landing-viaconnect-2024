import Image from "next/image";

export default function Matters() {
    return (
        <div className="relative">
            <div className="aspect-w-2 aspect-h-1">
                <Image
                    src="/photos/viasoft.png"
                    alt="Background Image"
                    quality={100}
                    objectFit="cover"
                    className="brightness-75"
                    layout="fill"
                />
            </div>
            <div
                className="flex flex-col justify-center font-body items-start relative max-w-screen-lg mx-4 px-6 py-16 sm:py-32 md:py-48 lg:py-60">
                <div className="hidden md:block">
                    <div className="text-7xl  ml-4">
                        <p>UM EVENTO</p>
                        <p>DE INOVAÇÃO PARA TODOS</p>
                    </div>
                    <div className="text-2xl mt-8 ml-4">
                        <p>Um encontro de grandes nomes do mercado</p>
                        <p>com mais de 200 palestrantes e 100 expositores.</p>
                    </div>
                </div>

                <div className=" md:hidden ">
                    <div className="text-xl ">
                        <p>INOVAÇÃO </p>
                        <p> </p>
                        <p>PARA TODOS</p>
                    </div>
                   {/* <div className="text-2xl mt-8">
                        <p>mais de 200 palestrantes e 100 expositores.</p>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}
