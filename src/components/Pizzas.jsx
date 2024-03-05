const Pizzas = ({ pizzaObj }) => {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span> ${pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Pizzas;
