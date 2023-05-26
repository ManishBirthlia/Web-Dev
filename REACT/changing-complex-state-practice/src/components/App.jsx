import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleContact(event) {
    const contactInfo = event.target.value;
    const contactName = event.target.name;
    setContact((p) => {
      if (contactName === "fName")
        return { fName: contactInfo, lName: p.lName, email: p.email };
      else if (contactName === "lName")
        return { fName: p.fName, lName: contactInfo, email: p.email };
      else return { fName: p.fName, lName: p.lName, email: contactInfo };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleContact}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleContact}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
