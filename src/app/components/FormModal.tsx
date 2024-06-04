'use client'

import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import TicketForm from "@/app/components/TicketForm";


interface TwitterModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function FormModal(props: TwitterModalProps) {

    const openModal = () => {
         props.setIsOpen(true);
    };

    const closeModal = () => {
        props.setIsOpen(false);
    };

    return (
        <div className="relative flex justify-center">


            {props.isOpen && (
                <Modal
                    style={{overlay: {backgroundColor: 'rgba(0,0,0,0.4)'}}}
                    isOpen={props.isOpen}
                    onRequestClose={closeModal}
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                    ariaHideApp={false}
                >
                    <div className="flex items-end bg-transparent justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-background-primary sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                                <TicketForm />
                     </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
