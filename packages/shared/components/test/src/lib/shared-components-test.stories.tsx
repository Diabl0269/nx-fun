import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest,
  SharedComponentsTestProps,
} from './shared-components-test';

export default {
  component: SharedComponentsTest,
  title: 'SharedComponentsTest',
} as Meta;

const Template: Story<SharedComponentsTestProps> = (args) => (
  <SharedComponentsTest {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
