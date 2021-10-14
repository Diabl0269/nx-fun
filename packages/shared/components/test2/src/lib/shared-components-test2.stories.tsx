import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest2,
  SharedComponentsTest2Props,
} from './shared-components-test2';

export default {
  component: SharedComponentsTest2,
  title: 'SharedComponentsTest2',
} as Meta;

const Template: Story<SharedComponentsTest2Props> = (args) => (
  <SharedComponentsTest2 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
