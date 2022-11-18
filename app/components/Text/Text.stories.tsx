import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from "./Text";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLg = Template.bind({});
TextLg.args = { size: 'lg', children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the'  };

//👇 Each story then reuses that template
export const TextMd = Template.bind({});
TextMd.args = {  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the'  };

export const TextSm = Template.bind({});
TextSm.args = { size: 'sm', children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the'  };
