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
  customTransition: "all ease 3.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 3500,
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
      bg: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Book Now",
      btn1: "More Info",
    },
    {
      id: 2,
      img: "./imgs/pexels-jean-van-der-meulen-1457842.jpg",
      alt: "img2",
      bg: "linear-gradient(to right top, #5d6f89, #477d90, #418a88, #5b9274, #85965f)",
      bg1: "linear-gradient(to bottom, #d85cc8, #c95bce, #b85bd4, #a45bd9, #8e5cde)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Book Now",
      btn1: "More Info",
    },
    {
      id: 3,
      img: "./imgs/pexels-lisa-fotios-1090638.jpg",
      alt: "img3",
      bg: "linear-gradient(to right bottom, #362d37, #5f404a, #865650, #9f7550, #a39c59)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Book Now",
      btn1: "More Info",
    },
    {
      id: 4,
      img: "./imgs/pexels-pixabay-276724.jpg",
      alt: "img4",
      bg: "linear-gradient(to right top, #9f68a4, #c76689, #d67267, #cc8a4c, #aea548)",
      heading: `It's My Best Work Of My  Designing Career`,
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Book Now",
      btn1: "More Info",
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
      {/*      <Carousel {...settings}>
        {slider.length > 0 &&
          slider.map((el) => (
            <div key={el.id} className="card">
              <div className="card-body py-0 px-1">
                <img src={el.img} className="slider-img" />
              </div>
            </div>
          ))}
      </Carousel>*/}
      <div className="container-fluid  pb-5 px-0" style={{ marginTop: "53px" }}>
        <div className="row">
          <div className="col-12">
            <Carousel {...settings}>
              {slider.length > 0 &&
                slider.map((el) => (
                  <div
                    key={el.id}
                    className="row"
                    style={{
                      background: el.bg,
                      borderRadius: "15px",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                      <div className="card banner-card mt-3 mx-1 mb-4 m-lg-5 m-md-5">
                        <img
                          className="banner-img"
                          src={el.img}
                          alt="banner-image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-6 col-12">
                      <h1
                        className="mt-3 mt-md-5 mt-lg-5 ms-5"
                        style={{ color: "#000" }}
                      >
                        {el.heading}
                      </h1>
                      <p className="bold ms-5 mt-4" style={{ color: "#000" }}>
                        {el.line}
                      </p>
                      <hr className="mx-5 mt-4" />
                      <div className="d-flex justify-content-center mt-4 mb-5">
                        <button
                          type="button"
                          class="btn text-white1 me-3"
                          style={{ background: "#051937" }}
                          data-mdb-ripple-color="dark"
                        >
                          {el.btn}
                        </button>
                        <button
                          type="button"
                          class="btn ms-3"
                          style={{
                            border: "2px solid #051937",
                            color: "#051937",
                            fontSize: "13px",
                            fontWeight: "bolder",
                          }}
                          data-mdb-ripple-color="dark"
                        >
                          {el.btn1}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  pb-5 px-0"
        style={{
          marginTop: "-18px",
        }}
      >
        <div
          className="row pb-5 pt-2 section"
          style={{
            background:
              "linear-gradient(to right top, #d16ba5, #b96dab, #9f6ead, #866faa, #6f6ea3, #6d6ea5, #6b6fa7, #696fa9, #7e6fb6, #986dbe, #b569c1, #d362bf)",
          }}
        >
          <h2 className="text-center my-3 logo">
            <b className="section-title px-3">Services</b>
          </h2>

          {service.length > 0 &&
            service.slice(0, 4).map((el) => (
              <div
                key={el.id}
                className="section-col col-lg-3 col-md-4 col-sm-6 col-12 p-1"
              >
                <div
                  className="card section-img"
                  style={{ backgroundImage: `url(${el.img})` }}
                >
                  <div className="section-des justify-contact-center">
                    <h5 className="card-title text-center mt-4">{el.title}</h5>
                    <p
                      className="card-text px-2 text-center"
                      style={{ color: "rgb(55 6 6)" }}
                    >
                      {el.des}
                    </p>
                    <a
                      className="text-center m-auto"
                      href="#"
                      style={{ color: "#a30505" }}
                    >
                      More Info
                    </a>
                  </div>
                  <h5 className="services-title">{el.title}</h5>
                </div>
              </div>
            ))}
        </div>
        <div
          className="row pb-5 pt-2 mt-5 section"
          style={{
            background:
              "linear-gradient(to right top, #976456, #9e7358, #a2825d, #a49266, #a4a272, #a0a97a, #9db084, #99b78f, #94b795, #8fb79a, #8cb69f, #8ab5a4)",
          }}
        >
          <h2 className="text-center my-3 logo">
            <b className="section-title px-3">Products</b>
          </h2>
          {service.length > 0 &&
            service
              .sort((a, b) => b.id - a.id)
              .map((el) => (
                <div
                  key={el.id}
                  className="section-col col-lg-3 col-md-4 col-sm-6 col-12 p-1"
                >
                  <div
                    className="card section-img"
                    style={{ backgroundImage: `url(${el.img})` }}
                  >
                    <div className="section-des justify-contact-center">
                      <h5 className="card-title text-center mt-4">
                        {el.title}
                      </h5>
                      <p
                        className="card-text px-2 text-center"
                        style={{ color: "rgb(55 6 6)" }}
                      >
                        {el.des}
                      </p>
                      <a
                        className="text-center m-auto"
                        href="#"
                        style={{ color: "#a30505" }}
                      >
                        More Info
                      </a>
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
