import Card from "@/app/components/Card";


export default function Workshops() {
    return (
        <div id="workshop" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">


            <div className="flex justify-center">
                <Card
                    image={"/workshop.png"}
                    alt={"Imagem do workshop sobre o framework substrate da Polkadot"}
                    title={"Blockchain: O Futuro da Tecnologia"}
                    description={"Polkadot como Infraestrutura da Web3"}/>
            </div>

            <div className="flex justify-center">
                <Card
                    image={"/logo_transparent.png"}
                    alt={"Imagem do Workshop sobre Poladot e suas parachains. A próxima geração das redes descentralizadas"}
                    title={"O ecossistema da Polkadot:"}
                    description={"Produtos e expansão"}/>
            </div>

            <div className="flex justify-center">
                <Card
                    image={"/workshop.png"}
                    alt={"Imagem do workshop sobre o framework substrate da Polkadot"}
                    title={"WEB3 e Blockchain no Paraná"}
                    description={"A Transformação digital do estado"}/>
            </div>
        </div>
    )


}