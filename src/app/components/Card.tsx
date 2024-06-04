
interface CardProps {
    image: string
    alt: string
    title: string
    description: string

}
export default function Card(props: CardProps) {
    return (
        <div data-theme="dark" className="rounded-2xl ">
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={props.image} alt={props.alt}
                         className="rounded-xl"/>
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>

                </div>
            </div>
        </div>

    )
}