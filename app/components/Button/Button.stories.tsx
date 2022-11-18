import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from "./Button";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { color: 'primary', children: 'Criar uma conta'  };

export const Secondary = Template.bind({});
Secondary.args = { color: 'secondary', children: 'Criar uma conta'  };

export const Error = Template.bind({});
Error.args = { color: 'error', children: 'Criar uma conta'  };