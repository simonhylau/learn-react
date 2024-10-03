import Message from "./Message";

function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  //items = [];
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {console.log(event.currentTarget.textContent);};


  return (
    <>
      {items.length === 0 && <Message message="No items to display" />}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
