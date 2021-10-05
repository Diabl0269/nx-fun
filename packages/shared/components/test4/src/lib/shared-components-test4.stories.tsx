import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest4,
  SharedComponentsTest4Props,
} from './shared-components-test4';

export default {
  component: SharedComponentsTest4,
  title: 'SharedComponentsTest4',
} as Meta;

const Template: Story<SharedComponentsTest4Props> = (args) => (
  <SharedComponentsTest4 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
