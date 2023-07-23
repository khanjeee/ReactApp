import { Fragment } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let item = ["NewYork", "Karachi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <Fragment>
      <ListGroup
        items={item}
        Heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>Hello</span>
      </Alert>
      <Button text={"Secondary"} type={"secondary"} />
      <Button text={"Primary"} type={"primary"} />
      {/* button with optional parameter  */}
      <Button text={"Primary"} />
    </Fragment>
  );
}

export default App;
