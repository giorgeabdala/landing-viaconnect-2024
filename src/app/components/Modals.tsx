'use client'

import TwitterModal from "@/app/components/TwitterModal";
import FormModal from "@/app/components/FormModal";
import React, {useState} from "react";
import ButtonDefault from "@/app/components/Button";


export default function Modals() {
    const [twitterModal, setTwitterModal] = useState(false);
    const [formModal, setFormModal] = useState(false);

    const redirect = () => {
        window.location.href = "https://forms.gle/zqWA5qyPSuovQLSf7";
    }

    return (
        <div>
            <ButtonDefault
                text="Garanta seu ingresso"
                onClick={() => setTwitterModal(true)}
            />

            <TwitterModal isOpen={twitterModal} setOpen={setTwitterModal} nextStep={() => redirect()} />


        </div>
    )
}