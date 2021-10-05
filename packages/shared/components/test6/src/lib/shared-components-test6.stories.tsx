import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest6,
  SharedComponentsTest6Props,
} from './shared-components-test6';

export default {
  component: SharedComponentsTest6,
  title: 'SharedComponentsTest6',
} as Meta;

const Template: Story<SharedComponentsTest6Props> = (args) => (
  <SharedComponentsTest6 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
