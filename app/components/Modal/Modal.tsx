import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState} from 'react';
import { Title } from "@Components/Title/Title";

export interface ModalProps {
    show: boolean;
    title?: string,
    className?: string;
    content: ReactNode;
    actionButtons: ReactNode;
    backdropClick?: any;
}

export function Modal(props:ModalProps) {
    return (
        <>
            <Transition appear show={props.show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={props.backdropClick}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {
                                        props.title
                                        ?  <Dialog.Title as={Fragment}>
                                                <Title tag='h5' isSubtitle>{ props.title }</Title>
                                            </Dialog.Title>
                                        : null
                                    }

                                    <div className="mt-4">
                                        { props.content}
                                    </div>

                                    <div className="flex mt-4 justify-end gap-2">
                                        { props.actionButtons }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}