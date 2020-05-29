const scrollToDiv = (id) => {
  const elmnt = document.getElementById(id);
  elmnt.scrollIntoView({ behavior: 'smooth' });
};
