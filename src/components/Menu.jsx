import pizzaData from '../../public/data';
import Pizzas from './Pizzas';

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizzas key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
