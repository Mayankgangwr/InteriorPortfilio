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
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        const slide = response.data.filter((item) => {
          return item.tag.includes("slider");
        });
        setSlider(slide);
        setAllmovie(response.data);
      });
  }
  return (
    <>
      <Nav />
      <Carousel {...settings}>
        {slider.length > 0 &&
          slider.map((el) => (
            <div key={el.id} className="card mx-1 mt-1">
              <div className="card-body p-1">
                <Link to={`/movie/${el.id}`}>
                  <img
                    src="/img/pexels-huseyn-kamaladdin-667838.jpg"
                    className="slider-img"
                  />
                </Link>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
};
export default Home;
