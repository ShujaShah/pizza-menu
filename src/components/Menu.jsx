import Pizzas from './Pizzas';

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      <Pizzas
        name="Pizza Spinacci"
        ingredient="Tomato, mozarella, spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
    </main>
  );
};

export default Menu;
