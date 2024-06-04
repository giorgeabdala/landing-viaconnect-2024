'use client'
import Email from "@/app/components/inputs/Email";
import ButtonDefault from "@/app/components/Button";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Swag from "@/app/api/dto/Swag";
import Image from "next/image";

const template =
    "*POLKADOT BRASIL* \n\n\n" +
    "Apresente essa mensagem no stand da Polkadot Brasil para retirar seus brindes. \n\n" +
    "Obrigado por participar do evento. \n" +
    "Até a próxima!!! \n\n\n" +
    "*Código de retirada:* " ;



export default function SwagForms() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [formattedWhats, setFormattedWhats] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [feedback, setFeedback] = useState("");
    const [displaySpinner, setDisplaySpinner] = useState(false);

    const router = useRouter();

    // Function to format WhatsApp number
    const formatWhatsApp = (input: string) => {
        const cleanedInput = input.replace(/\D/g, ""); // Remove non-digit characters
        const countryCode = cleanedInput.slice(0, 2);
        const phoneNumber = cleanedInput.slice(2);
        return `(${countryCode})-${phoneNumber}`;
    };

    // Handle WhatsApp input change
    const handleWhatsAppChange = (e: any) => {
        const inputValue = e.target.value;
        setPhone(inputValue.replace(/\D/g, ""));
        const formattedValue = formatWhatsApp(inputValue);
        setFormattedWhats(formattedValue);
    };

    async function storeSwag() {
        const event  = {connect: {id: process.env.NEXT_PUBLIC_EVENT_ID}};

        const swag:Swag = {name: name, email: email, phone: phone, company: company, position: position, event: event, feedback: feedback};
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/swag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(swag),
            cache: 'no-cache'
        });

        if (!response.ok)  {
            console.log(response.statusText);
            return false;
        }

        const data = await response.json();
        return data.swagId;
    }

    async function sendWhats(code: string) {
        const message = template + code;
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/whats', {
            method: 'POST', headers:
                {'Content-Type': 'application/json'},
            body: JSON.stringify({phone: phone, message: message}),
            cache: 'no-cache'
        },);
        if (!response.ok) console.log(response.statusText);
        return response.ok;
    }

    async function handleFormSubmit(e:any) {
        e.preventDefault();
        setDisplaySpinner(true);
        console.log("submit");
        const code = await storeSwag();
        if (code)                 return router.push("/checkout/sucess");
        //comentado para enviar mensagem no whatsapp
        //   { if (await sendWhats(code)) {
         //   }}
        return router.push("/checkout/error");
    }


    return (
        <section className="max-w-xl p-4 mx-auto  rounded-md shadow-md bg-gray-800 ">
            <div className="flex items-center justify-center mt-12">
                <Image className="rounded-2xl" src="/photos/dotSmart.jpeg" alt="logotipo da comunidade Polkadot Brasil na Smart City" width={600} height={600}/>
            </div>
            <h2 className="text-lg mt-16 font-semibold text-white font-body">Preencha seus dados</h2>

            <form onSubmit={handleFormSubmit}> {/* Use the handleFormSubmit function */}
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className=" text-white font-body" htmlFor="name">Nome Completo</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                               className="block w-full bg-gray-900 px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring">
                        </input>
                    </div>

                    <div>
                        <label className="text-white font-body" htmlFor="whats">
                            WhatsApp*
                        </label>
                        <input
                            id="whats"
                            type="text"
                            value={formattedWhats} // Display formatted WhatsApp
                            onChange={handleWhatsAppChange}
                            placeholder="(XX) 00000-0000"
                            className="block bg-gray-900 w-full px-4 py-2 mt-2 border rounded-md text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <Email value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <div>
                        <label className="text-white"  htmlFor="profissao">Empresa</label>
                        <input id="profissao" type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                               className="block bg-gray-900 w-full px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-white" htmlFor="cargo">Cargo</label>
                        <input id="cargo" type="text" value={position} onChange={(e) => setPosition(e.target.value)}
                               className="block bg-gray-900 w-full px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="text-white" htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}
                                  className="block bg-gray-900 w-full px-4 py-2 mt-2 border  rounded-md text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>


                </div>

                <div className="flex justify-end mt-6">

                    <div className="flex justify-end mt-6">
                        <ButtonDefault type={"submit"} text={"Enviar"} displaySpinner={displaySpinner}/>


                    </div>
                </div>
            </form>
        </section>
    )
}
