import { ReactNode, ComponentType } from 'react';
import { Text } from "@Components/Text/Text";
import { Title } from "@Components/Title/Title";
import { Disclosure, Transition} from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

export interface ItemsProps {
    title: string;
    description: string | ReactNode;
}

export interface AccordionProps {
    items?: Array<ItemsProps>;
    className?: string;
}

export function Accordion({ items }: AccordionProps) {

    const renderItems = () => {
        return items?.map((item) =>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="bg-default w-full rounded-md p-md my-sm flex">
                            <Text tag={'span'} className={'text-white font-bold ml-2'}>{item.title}</Text>
                            <ChevronRightIcon className={clsx(open ? 'rotate-90 transform' : '', 'h-7 w-7 ml-auto text-white') } />
                        </Disclosure.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >

                            <Disclosure.Panel>
                                <Text className={'p-md text-white'}>
                                    {item.description}
                                </Text>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        );
    }

    return (
        <div className="w-full max-w-md rounded-md bg-secondary p-sm">
            { renderItems() }
        </div>
    )
}