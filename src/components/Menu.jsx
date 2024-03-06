import pizzaData from '../../public/data';
import Pizzas from './Pizzas';

const Menu = () => {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All our
            stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizzas key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu right now, please comeback later :)</p>
      )}
    </main>
  );
};

export default Menu;
