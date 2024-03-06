const Footer = () => {
  const hour = new Date().getHours();
  const openningHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openningHour && hour <= closingHour;

  console.log(isOpen);
  //   if (hour >= openningHour && hour <= closingHour)
  //     alert('We are Currently Open');
  //   else alert('Sorry we are closed!');
  return (
    <footer className="footer">
      {/* <p>{new Date().toLocaleTimeString()} We are Currently open</p> */}
      {isOpen && (
        <div className="order">
          <p>
            {new Date().toLocaleTimeString()} We are Open until {closingHour}
            :00, You can visit us or order online +1 (800) 235 6600
          </p>
          <button className="btn"> Order </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
