export const Card = ({ isName, isPetName }) => {
  return (
    <div className="card">
      {isName && <h4>Hola, {isName}</h4>}
      {isPetName && <h4>El nombre de tu mascota es: {isPetName}</h4>}
    </div>
  );
};
