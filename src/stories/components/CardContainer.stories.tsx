import { Meta, StoryObj } from "@storybook/react";
import CardContainer from "../../components/CardContainer";

const meta: Meta<typeof CardContainer> = {
  title: "Components/CardContainer",
  component: CardContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CardContainer>;

export const WithText: Story = {
  render: () => {
    return (
      <div style={{ width: "20rem" }}>
        <CardContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quaerat blanditiis mollitia eaque harum esse dolor voluptatibus
            earum autem accusantium, unde ut quas aperiam? Ab repudiandae
            delectus cumque officia quibusdam!
          </p>
        </CardContainer>
      </div>
    );
  },
};

export const WithImage: Story = {
  render: () => {
    return (
      <CardContainer>
        <img src="https://static.wikia.nocookie.net/lotr/images/5/50/Silmarillion.jpg" />
      </CardContainer>
    );
  },
};
