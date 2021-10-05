import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest7,
  SharedComponentsTest7Props,
} from './shared-components-test7';

export default {
  component: SharedComponentsTest7,
  title: 'SharedComponentsTest7',
} as Meta;

const Template: Story<SharedComponentsTest7Props> = (args) => (
  <SharedComponentsTest7 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
