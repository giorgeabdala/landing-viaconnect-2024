import Email from "@/app/components/inputs/Email";
import DateInput from "@/app/components/inputs/DateInput";
import ButtonDefault from "@/app/components/Button";
import {useState} from "react";
import {useRouter} from "next/navigation";
import User from "@/app/api/dto/User";

export default function TicketForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whats, setWhats] = useState("");
    const [formattedWhats, setFormattedWhats] = useState("");
    const [birthday, setBirthday] = useState("");
    const [occupation, setOccupation] = useState("");
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
        setWhats(inputValue.replace(/\D/g, ""));
        const formattedValue = formatWhatsApp(inputValue);
        setFormattedWhats(formattedValue);
    };

    async function storeUser() {
        const event  = {connect: {id: process.env.NEXT_PUBLIC_EVENT_ID}};

        const user:User = {name: name, email: email, birthday: new Date(birthday).toISOString(),
            occupation:occupation, whatsapp: whats, event: event};
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            cache: 'no-cache'
        });
        if (!response.ok)  console.log(response.statusText);
        return response.ok;
    }

    async function sendWhats() {
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/whats', {
            method: 'POST', headers:
                {'Content-Type': 'application/json'},
            body: JSON.stringify(whats),
            cache: 'no-cache'
        },);
        if (!response.ok) console.log(response.statusText);
        return response.ok;
    }

    async function handleFormSubmit(e:any) {
        setDisplaySpinner(true);
        e.preventDefault();
        console.log("submit");
        if (await storeUser()) {
            if (await sendWhats()) {
                return router.push("/checkout/sucess");
            }}
        return router.push("/checkout/error");
    }


    return (
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold  text-white font-body">Preencha seus dados</h2>

            <form onSubmit={handleFormSubmit}> {/* Use the handleFormSubmit function */}
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className=" text-white font-body" htmlFor="name">Nome Completo</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                               className="block w-full bg-gray-900 px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring">
                        </input>
                    </div>

                    <div>
                        <label className="text-white font-body" htmlFor="whats">
                            WhatsApp
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
                        <label className="text-white"  htmlFor="profissao">Profissão</label>
                        <input id="profissao" type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)}
                               className="block bg-gray-900 w-full px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <DateInput value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
                </div>

                <div className="flex justify-end mt-6">

                    <div className="flex justify-end mt-6">
                        <ButtonDefault type={"submit"} text={"Enviar"} disabled={displaySpinner} displaySpinner={displaySpinner}/>


                    </div>
                </div>
            </form>
        </section>
    )
}
