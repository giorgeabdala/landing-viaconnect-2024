import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";

interface PresentationProps {
    className?: string
}


export default function Presentation(props: PresentationProps) {
    return (
        <Area className="bg-background-terciary h-full">
            <div id="start" className={`flex flex-col items-center justify-center leading-loose
             md:text-2xl text-white font-title  gap-8 mb-24`}>
                <h2 className="text-zinc-400">CONNECT WEEK SUMMIT 2024</h2>
                <h2 className="hidden md:block">19, 20 E 21 DE JUNHO - 07H ÀS 18H</h2>
                <h2 className="md:hidden">19 - 21 DE JUNHO - 07H ÀS 18H</h2>

                <div className="flex flex-col text-center  gap-4 font-body ">
                    <p>Preparado para mergulhar em um universo de tecnologia e inovação?</p>
                </div>

            </div>


        </Area>
    )

}