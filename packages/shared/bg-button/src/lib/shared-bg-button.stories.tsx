import { Story, Meta } from '@storybook/react';
import { BgButton, BgButtonProps } from './shared-bg-button';

export default {
  component: BgButton,
  title: 'BgButton',
} as Meta;

const Template: Story<BgButtonProps> = (args) => <BgButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: '',
};
