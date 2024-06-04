
interface dateProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function DateInput(props: dateProps) {
    return (
        <div>
            <label htmlFor="Birthday" className="block text-white ">Data Nascimento</label>

            <input type="date" value={props.value} onChange={props.onChange}
                   className="block mt-2 font-body w-full placeholder-gray-500 rounded-lg border px-5 py-2.5  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 border-gray-600 bg-gray-900 text-gray-300 focus:border-blue-300"/>
        </div>
    )
}