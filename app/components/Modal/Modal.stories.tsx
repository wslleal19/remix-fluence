import { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalProps } from './Modal'
import { Text } from "@Components/Text/Text";
import { Button } from "@Components/Button/Button";

export default {
    title: 'Components/Modal',
    component: Modal,
    args: {
        show: true,
        title: 'Modal example',
        content: <>
            <Text>Grill apple patiently, then mix with honey and serve smoothly in cooker</Text>
            <Text>Lorem ipsum dolor</Text>
        </>,
        actionButtons: <>
            <Button>Ok, entendi</Button>
        </>,
        backdropClick: () => console.log('log')
    },
    argTypes: {}
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {};