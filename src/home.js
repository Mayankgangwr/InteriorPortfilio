import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./style.css";
import Nav from "./nav";
import { Outlet, Link } from "react-router-dom";

const settings = {
  infinite: true,
  draggAble: true,
  swipeAble: true,
  customTransition: "all ease 1.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 1500,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  },
};
const Home = () => {
  const [recent, setRecent] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [allmovie, setAllmovie] = useState([]);
  const [slider, setSlider] = useState([
    {
      id: 1,
      img: "./imgs/pexels-huseyn-kamaladdin-667838.jpg",
      alt: "img1",
    },
    {
      id: 2,
      img: "./imgs/pexels-jean-van-der-meulen-1457842.jpg",
      alt: "img2",
    },
    {
      id: 3,
      img: "./imgs/pexels-lisa-fotios-1090638.jpg",
      alt: "img3",
    },
    {
      id: 4,
      img: "./imgs/pexels-pixabay-276724.jpg",
      alt: "img4",
    },
  ]);
  return (
    <>
      <Nav />
      <Carousel {...settings}>
        {slider.length > 0 &&
          slider.map((el) => (
            <div key={el.id} className="card">
              <div className="card-body py-0 px-1">
                <img src={el.img} className="slider-img" />
              </div>
            </div>
          ))}
      </Carousel>
      <div className="container-fluid">
        <h2 className="text-center my-3 logo">
          <b className="section-title px-3">Services</b>
        </h2>
        <div className="row p-0">
          {slider.length > 0 &&
            slider.map((el) => (
              <div key={el.id} className="col-lg-3 col-md-4 col-sm-4 col-6 p-1">
                <div
                  className="card slider-img"
                  style={{ backgroundImage: `url(${el.img})` }}
                >
                  <h4 className="services-title">{`Interior`}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Home;
