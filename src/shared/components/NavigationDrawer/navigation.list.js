const menu = [
  {
    id: "home",
    text: "Home",
    link: "/",
  },
  {
    id: "about",
    text: "About Us",
    link: "/about",
    children: [
      {
        id: "beliefs",
        text: "Our Beliefs",
        link: "/about/beliefs",
      },
      {
        id: "pastors",
        text: "Our Pastors",
        link: "/pastors",
      },
    ],
  },
  {
    id: "contact",
    text: "Contact Us",
    link: "/contact",
  },
  {
    id: "location",
    text: "Location",
    link: "/location",
  },
];

export default menu;
