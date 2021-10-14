import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest3,
  SharedComponentsTest3Props,
} from './shared-components-test3';

export default {
  component: SharedComponentsTest3,
  title: 'SharedComponentsTest3',
} as Meta;

const Template: Story<SharedComponentsTest3Props> = (args) => (
  <SharedComponentsTest3 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
