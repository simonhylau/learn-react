import Message from "./Message";

function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  items = [];

  if (items.length === 0) {
    return <Message message="No items to display" />;
  }

  return (
    <>
      {items.length === 0 ? <Message message="No items to display" /> : null}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
