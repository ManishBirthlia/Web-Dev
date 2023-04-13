import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(prop) {
  return (
    <Card
      name={prop.name}
      img={prop.imgURL}
      tel={prop.phone}
      email={prop.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)};
    </div>
  );
}

export default App;
