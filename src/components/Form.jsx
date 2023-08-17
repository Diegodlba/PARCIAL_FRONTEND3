import { useState } from "react";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [petName, setPetName] = useState("");
  const [petNameMessage, setPetNameMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true); 

  const validateForm = () => {
    const isNameValid = name.trim() !== "" && name.length >= 3;
    const isPetNameValid = petName.trim() !== "" && petName.length >= 6;
    return isNameValid && isPetNameValid;
  };

  const nameValidation = () => {
    if (name.trim() === "") {
      setNameMessage("El campo nombre no puede estar vacío");
    } else if (name.length < 3) {
      setNameMessage("El nombre debe contener al menos 3 caracteres");
    } else {
      setNameMessage("");
    }
  };

  const petNameValidation = () => {
    if (petName.trim() === "") {
      setPetNameMessage("El campo nombre de su mascota no puede estar vacío");
    } else if (petName.length < 6) {
      setPetNameMessage(
        "El nombre de su mascota debe contener al menos 6 caracteres"
      );
    } else {
      setPetNameMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nameValidation();
    petNameValidation();
    const isFormValid = validateForm();

    if (isFormValid) {
      setIsFormValid(true);
      props.onName(name);
      props.onPetName(petName);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>TU MASCOTA Y TU</h3>
      <h3>🐶 🐱 🐰 🦔  </h3>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        placeholder="Ingrese su nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameMessage && <small>{nameMessage}</small>}

      <label htmlFor="petName"></label>
      <input
        type="text"
        id="petName"
        placeholder="Ingrese el nombre de su mascota"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
      />
      {petNameMessage && <small>{petNameMessage}</small>}
      <button type="submit">Guardar</button>
      {!isFormValid && (
        <small>Por favor, complete los campos correctamente.</small>
      )}
    </form>
  );
};
