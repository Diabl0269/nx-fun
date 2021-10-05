import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest5,
  SharedComponentsTest5Props,
} from './shared-components-test5';

export default {
  component: SharedComponentsTest5,
  title: 'SharedComponentsTest5',
} as Meta;

const Template: Story<SharedComponentsTest5Props> = (args) => (
  <SharedComponentsTest5 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
