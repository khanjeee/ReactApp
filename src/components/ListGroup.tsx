import { Fragment, useState } from "react";

//prop -> input for components
interface Props {
  items: string[];
  Heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, Heading, onSelectItem }: Props) {
  //const items = ["NewYork", "Karachi", "Lahore"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{Heading}</h1>
      {items.length == 0 && <h1>No items found</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
