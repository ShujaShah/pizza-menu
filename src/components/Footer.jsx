const Footer = () => {
  const hour = new Date().getHours();
  const openningHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openningHour && hour <= closingHour;

  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().toLocaleTimeString()} We are Open until {closingHour}
            :00, You can visit us or order online +1 (800) 235 6600
          </p>
          <button className="btn"> Order </button>
        </div>
      ) : (
        <p>
          We are open between {openningHour}:00 and {closingHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
