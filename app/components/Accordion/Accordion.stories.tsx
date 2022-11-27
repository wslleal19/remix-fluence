import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from "./Accordion";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionExampple = Template.bind({});
AccordionExampple.args = {
    items:[
        {
            title: 'Como funciona?',
            description: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
            title: 'Quando será o sorteio?',
            description: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
            title: 'Changes de ganhar',
            description: 'Lorem ipsum dolor sit amet, consectetur consectetur ametis ',
        }
    ]
};