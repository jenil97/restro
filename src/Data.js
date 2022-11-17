import MenuImg1 from "../src/assets/menu/1.png";
import MenuImg2 from "../src/assets/menu/2.png";
import MenuImg3 from "../src/assets/menu/3.png";
import MenuImg4 from "../src/assets/menu/4.png";

import ModelWhiteImg from "../src/assets/testimonial/model-white.png";
import Avatar1 from "../src/assets/testimonial/avatar1.png";
import Avatar2 from "../src/assets/testimonial/avatar2.png";
import Avatar3 from "../src/assets/testimonial/avatar3.png";

import ModelBlackImg from "./assets/model-black.png";

export const menuData = {
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
    },
  ],
};

export const BookingData = {
  title: "book the table",
  subtitle:
    "Call on (800) 123-4567  from 5AM - 11PM daily, Reservation is required for parties , event  & 6 or more person.",
  modelImg: ModelBlackImg,
  btnText: "Book",
};
