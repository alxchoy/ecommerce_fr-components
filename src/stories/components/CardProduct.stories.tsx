import { Meta, StoryObj } from "@storybook/react";
import CardProduct from "../../components/CardProduct";

type Story = StoryObj<typeof CardProduct>;

const meta: Meta<typeof CardProduct> = {
  title: "Components/CardProduct",
  component: CardProduct,
  tags: ["autodocs"],
};

const description =
  "The Silmarillion is an account of the Elder Days, of the First Age of Tolkien's world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part.";

export default meta;

export const Product: Story = {
  args: {
    imgUrl:
      "https://static.wikia.nocookie.net/lotr/images/5/50/Silmarillion.jpg",
    product: { title: "The Silmarillion", description, price: 123.4 },
  },
};
