import Button from "./components/Button";
import CardContainer from "./components/CardContainer";
import CardProduct from "./components/CardProduct";

const handleButton = () => {
  console.log("press button");
};

function App() {
  const description =
    "The Silmarillion is an account of the Elder Days, of the First Age of Tolkien's world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part.";
  return (
    <>
      <CardContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          veritatis eum explicabo eligendi! Libero unde nobis ut ducimus
          molestias, minima maiores perspiciatis facere quos impedit explicabo
          perferendis deserunt. Dolorem, officia.
        </p>
      </CardContainer>
      <CardProduct
        imgUrl="https://static.wikia.nocookie.net/lotr/images/5/50/Silmarillion.jpg"
        product={{ title: "The Silmarillion", description, price: 123.4 }}
      />
      <CardProduct
        imgUrl="https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908"
        product={{ title: "The Silmarillion", description, price: 123.4 }}
      />
      <Button name="store" onClick={handleButton} isPrimary={true} />
      <Button name="store" onClick={handleButton} />
    </>
  );
}

export default App;
