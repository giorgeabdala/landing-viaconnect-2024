import React, { useState } from 'react';
import ButtonDefault from "@/app/components/Button";
import FormModal from "@/app/components/FormModal"; // Import the FormModal component

interface TwitterProps {
    closeModal: () => void;
    nextStep: () => void;
}

const tweetId = process.env.NEXT_PUBLIC_TWETTER_ID || '1';

export default function TwitterButton(props: TwitterProps) {
    const retweetLink = `https://twitter.com/intent/retweet?tweet_id=${tweetId}`;
    const [buttonText, setButtonText] = useState('Retweet');
    const [buttonClicked, setButtonClicked] = useState(false);

    const compartilharTweetter = () => {
        if (!buttonClicked) {
            window.open(retweetLink, '_blank');
            setButtonClicked(true);
            setButtonText('Preencher Formulário');
        } else {
            props.closeModal(); // Close TwitterModal
            props.nextStep(); // Go to next step

        }
    };



    return (
        <div>
            <ButtonDefault
                text={buttonText}
                onClick={compartilharTweetter}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            />

        </div>
    );
}
