import StepItem, {
  StepItemProps,
} from "../../../../components/molecules/StepItem";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "step1",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
  title: "1. Start"
};
