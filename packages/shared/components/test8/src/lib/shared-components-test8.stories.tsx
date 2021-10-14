import { Story, Meta } from '@storybook/react';
import {
  SharedComponentsTest8,
  SharedComponentsTest8Props,
} from './shared-components-test8';

export default {
  component: SharedComponentsTest8,
  title: 'SharedComponentsTest8',
} as Meta;

const Template: Story<SharedComponentsTest8Props> = (args) => (
  <SharedComponentsTest8 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
