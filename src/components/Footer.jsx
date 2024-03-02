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
    <>
      <p>{new Date().toLocaleTimeString()} We are Currently open</p>
    </>
  );
};

export default Footer;
