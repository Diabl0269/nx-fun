import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest10,
  SharedComponentsTest10Props,
} from './shared-components-test10';

export default {
  component: SharedComponentsTest10,
  title: 'SharedComponentsTest10',
} as Meta;

const Template: Story<SharedComponentsTest10Props> = (args) => (
  <SharedComponentsTest10 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
