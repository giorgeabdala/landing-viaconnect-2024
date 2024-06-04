import {Twitter} from "lucide-react";
import Link from "next/link";
import {Instagram} from "lucide-react";



export default function SocialMedia() {
    return (
        <div
            id="redes_sociais"
            className="flex gap-4 text-polkadot-rose "
        >
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Link href="https://www.instagram.com/polkadotbrasil/">
                <Instagram className=" hover:text-white cursor-pointer" size="34" />
            </Link>
            <Link href="https://twitter.com/polkadot_brasil?s=20">
                <Twitter className=" hover:text-white cursor-pointer" size="34" />
            </Link>
        </div>
    )
}