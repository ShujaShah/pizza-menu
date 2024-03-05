import pizzaData from '../../public/data';
import Pizzas from './Pizzas';

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      {pizzaData.map((pizza) => (
        <Pizzas
          name={pizza.name}
          ingredient={pizza.ingredients}
          photoName={pizza.photoName}
          price={pizza.price}
        />
      ))}
      {/* <Pizzas
        name="Pizza Spinacci"
        ingredient="Tomato, mozarella, spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      /> */}
    </main>
  );
};

export default Menu;
