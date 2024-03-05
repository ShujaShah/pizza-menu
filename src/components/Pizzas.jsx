// const Pizzas = (props) => {
//   return (
//     <div className="pizza">
//       <img src={props.photoName} alt={props.name} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredient}</p>
//         <span> ${props.price}</span>
//       </div>
//     </div>
//   );
// };

// export default Pizzas;

const Pizzas = ({ name, photoName, ingredient, price }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span> ${price}</span>
      </div>
    </div>
  );
};

export default Pizzas;
