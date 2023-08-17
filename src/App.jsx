import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

function App() {
  const [theName, setTheName] = useState("");
  const [thePetName, setThePetName] = useState("");

  const handleNameSubmit = (name) => {
    setTheName(name);
  };

  const handlePetNameSubmit = (petName) => {
    setThePetName(petName);
  };

  return (
    <>
      <Form onName={handleNameSubmit} onPetName={handlePetNameSubmit} />
      {(theName || thePetName) && (
        <Card isName={theName} isPetName={thePetName} />
      )}
    </>
  );
}

export default App;
