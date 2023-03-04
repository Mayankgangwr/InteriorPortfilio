import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./style.css";
import Nav from "./nav";
import Footer from "./footer";
import { Outlet, Link } from "react-router-dom";

const settings = {
  infinite: true,
  draggAble: true,
  swipeAble: true,
  customTransition: "all ease 2.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 2500,
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
  const [service, setService] = useState([
    {
      id: 1,
      title: "Interior",
      img: "./imgs/pexels-huseyn-kamaladdin-667838.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img1",
    },
    {
      id: 2,
      title: "Interior",
      img: "./imgs/pexels-jean-van-der-meulen-1457842.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img2",
    },
    {
      id: 3,
      title: "Interior",
      img: "./imgs/pexels-lisa-fotios-1090638.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img3",
    },
    {
      id: 4,
      title: "Interior",
      img: "./imgs/pexels-pixabay-276724.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img4",
    },
    {
      id: 5,
      title: "Interior",
      img: "./imgs/pexels-vecislavas-popa-1571453.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img5",
    },
    {
      id: 6,
      title: "Interior",
      img: "./imgs/pexels-vecislavas-popa-1571459.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img6",
    },
    {
      id: 7,
      title: "Interior",
      img: "./imgs/pexels-vecislavas-popa-1571460.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img7",
    },
    {
      id: 8,
      title: "Interior",
      img: "./imgs/pexels-vecislavas-popa-1643383.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img8",
    },
    {
      id: 9,
      title: "Interior",
      img: "./imgs/pexels-pixabay-271624.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img9",
    },
    {
      id: 10,
      title: "Interior",
      img: "./imgs/pexels-pixabay-271795.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img10",
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
      <div className="container-fluid pb-5">
        <h2 className="text-center my-3 logo">
          <b className="section-title px-3">Services</b>
        </h2>
        <div className="row p-0">
          {service.length > 0 &&
            service.slice(0, 4).map((el) => (
              <div
                key={el.id}
                className="section-col col-lg-2 col-md-3 col-sm-4 col-6 p-1"
              >
                <div
                  className="card section-img"
                  style={{ backgroundImage: `url(${el.img})` }}
                >
                  <div className="section-des">
                    <h5 className="card-title text-center mt-5">{el.title}</h5>
                    <p
                      className="card-text px-5 text-center"
                      style={{ color: "rgb(55 6 6)" }}
                    >
                      {el.des}
                    </p>
                  </div>
                  <h5 className="services-title">{el.title}</h5>
                </div>
              </div>
            ))}
        </div>
        <h2 className="text-center my-3 logo">
          <b className="section-title px-3">Products</b>
        </h2>
        <div className="row p-0">
          {service.length > 0 &&
            service
              .sort((a, b) => b.id - a.id)
              .map((el) => (
                <div
                  key={el.id}
                  className="section-col col-lg-2 col-md-3 col-sm-4 col-6 p-1"
                >
                  <div
                    className="card section-img"
                    style={{ backgroundImage: `url(${el.img})` }}
                  >
                    <div className="section-des">
                      <h5 className="card-title text-center mt-5">
                        {el.title}
                      </h5>
                      <p
                        className="card-text px-5 text-center"
                        style={{ color: "rgb(55 6 6)" }}
                      >
                        {el.des}
                      </p>
                    </div>
                    <h5 className="services-title">{el.title}</h5>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
