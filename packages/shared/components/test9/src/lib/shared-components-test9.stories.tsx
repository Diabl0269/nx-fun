import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest9,
  SharedComponentsTest9Props,
} from './shared-components-test9';

export default {
  component: SharedComponentsTest9,
  title: 'SharedComponentsTest9',
} as Meta;

const Template: Story<SharedComponentsTest9Props> = (args) => (
  <SharedComponentsTest9 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
