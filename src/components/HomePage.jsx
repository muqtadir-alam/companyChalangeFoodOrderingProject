import React from "react";
import "../components/homepage.css";
import FoodItem from "./FoodItem";

const foodName = [
  {
    key: "1",
    name: "maxican taco"
  },

  {
    Id: "2",
    name: "Farmhouse pizza"
  },

  {
    Id: "3",
    name: "Chicken burger"
  },
  {
    Id: "4",
    name: "Loaded Nachos"
  },

  {
    Id: "5",
    name: "Hakka Noodles"
  }
];
function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="nav-container">
          <div className="header">
            <div className="hamburger">
              <div className="hamburger-line1"></div>
              <div className="hamburger-line2"></div>
              <div className="hamburger-line3"></div>
            </div>
            <h2>
              Lorem <br /> Ipsum
            </h2>
            <img
              src="https://image.shutterstock.com/image-vector/trolley-cart-icon-vector-template-260nw-1400875361.jpg"
              alt="hhhh"
            />
          </div>

          <ul>
            <li>
              <a href="/"> About</a>
            </li>
            <li>
              <a href="/"> Services</a>
            </li>
            <li>
              <a href="/"> Cuision</a>
            </li>
            <li>
              <a href="/"> Gallery</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Book</a>
            </li>
            <button className="nav-btn">Cart</button>
          </ul>
        </div>
        <div className="mid-container">
          <div className="item-container">
            <h2>
              what are you <br /> having food Lunch?
            </h2>
          </div>
          <div className="food-item">
            {foodName.map((alam, index) => {
              return <FoodItem name={alam.name} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="lorem-container">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          numquam vero veniam, doloribus officiis provident quisquam sequi,
          harum nostrum autem iure obcaecati fuga. Quae alias perferendis
          reprehenderit. Commodi, cumque eum.
        </p>
        <hr />
      </div>
    </>
  );
}

export default HomePage;
