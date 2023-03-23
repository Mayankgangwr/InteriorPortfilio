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
      img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
      alt: "img1",
      bg: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Order Now",
      btn1: "just in 120",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750__340.jpg",
      alt: "img2",
      bg: "linear-gradient(to right top, #5d6f89, #477d90, #418a88, #5b9274, #85965f)",
      bg1: "linear-gradient(to bottom, #d85cc8, #c95bce, #b85bd4, #a45bd9, #8e5cde)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Order Now",
      btn1: "just in 130",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2020/03/15/23/05/momos-4935232_960_720.jpg",
      alt: "img3",
      bg: "linear-gradient(to right bottom, #362d37, #5f404a, #865650, #9f7550, #a39c59)",
      heading: "It's My Best Work Of My Designing Career",
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Order Now",
      btn1: "just in 150",
    },
    {
      id: 4,
      img: "https://static.toiimg.com/photo/94078477.cms",
      alt: "img4",
      bg: "linear-gradient(to right top, #9f68a4, #c76689, #d67267, #cc8a4c, #aea548)",
      heading: `It's My Best Work Of My  Designing Career`,
      line: "Culture Shapes values. Values Determine The Future.",
      btn: "Order Now",
      btn1: "just in 100",
    },
  ]);
  const [service, setService] = useState([
    {
      id: 1,
      title: "QR Order",
      img: "https://www.ordermate.com.au/hubfs/banner-table-ordering-mobile3.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img1",
    },
    {
      id: 2,
      title: "Fresh Meals",
      img: "https://img.freepik.com/premium-photo/cooking-fresh-meals-using-modern-multi-cooker-home_122732-1497.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img2",
    },
    {
      id: 3,
      title: "Digital Bill",
      img: "https://cdn3.vectorstock.com/i/1000x1000/59/07/digital-bill-flat-concept-icon-payment-vector-26155907.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img3",
    },
    {
      id: 4,
      title: "Quality Food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUaC1R6DfQwUJfg5e2ElljyE3464NVjw_5xBXY0E2nZVlS-VMKvlm657S6VMKIWGl9yI&usqp=CAU",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img4",
    },
    {
      id: 5,
      title: "Interior",
      img: "../imgs/pexels-vecislavas-popa-1571453.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img5",
    },
    {
      id: 6,
      title: "Interior",
      img: "../imgs/pexels-vecislavas-popa-1571459.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img6",
    },
    {
      id: 7,
      title: "Interior",
      img: "../imgs/pexels-vecislavas-popa-1571460.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img7",
    },
    {
      id: 8,
      title: "Interior",
      img: "../imgs/pexels-vecislavas-popa-1643383.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img8",
    },
    {
      id: 9,
      title: "Interior",
      img: "../imgs/pexels-pixabay-271624.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img9",
    },
    {
      id: 10,
      title: "Interior",
      img: "../imgs/pexels-pixabay-271795.jpg",
      des: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      alt: "img10",
    },
  ]);
  const cat = ["Break Fast", "Lunch", "Dinner", "Fast Food", "Drinks"];
  const food = [1, 2, 3];
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
          className="row pb-3 pt-2 mt-5 section"
          style={{
            background:
              "linear-gradient(to right top, #976456, #9e7358, #a2825d, #a49266, #a4a272, #a0a97a, #9db084, #99b78f, #94b795, #8fb79a, #8cb69f, #8ab5a4)",
          }}
        >
          <h2 className="text-center my-3 logo">
            <b className="section-title px-3">Menu</b>
          </h2>
          {cat.map((el) => (
            <>
              <h6 className="logo mt-2 mb-1">
                <b className="section-title px-3">{el}</b>
              </h6>
              {food.map((el) => (
                <div
                  key={el}
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-2"
                >
                  <div className="card">
                    <div className="card-body p-2">
                      <div className="d-flex text-black p-0">
                        <img
                          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Generic placeholder image"
                          className="food-logo"
                        />
                        <div className="row ps-3">
                          <div className="col-12">
                            <h6 className="text-start">Pizza</h6>
                          </div>
                          <div className="col-12">
                            <span className="price sale-price pe-2">₹100</span>
                            <span className="price mrp">₹125</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ))}
          <button className="btn btn-primary mx-auto px-1 mt-3 w-25">
            View More
          </button>
        </div>
        <div
          className="row pb-5 pt-2 mt-5 section"
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
            backgroundColor: "#FBAB7E",
            backgroundImage:
              "linear-gradient(62deg, rgb(176 138 117) 0%, rgb(114 97 56) 50%, rgb(43 57 69) 100%)",
          }}
        >
          <h2 className="text-center my-3 logo">
            <b className="section-title px-3">About Us</b>
          </h2>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="w-100 p-1 mt-3"
              style={{ borderRadius: "10px" }}
              alt="about-img"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p className="my-1 px-3 logo" style={{ fontSize: "18px" }}>
              The About Us page of your website is an essential source of
              information for all who want to know more about your business.
              About Us pages are where you showcase your history, what is unique
              about your work, your company’s values, and who you serve. The
              design, written content, and visual or video elements together
              tell an important story about who you are and why you do it.
            </p>
            <p className="my-1 px-3 logo" style={{ fontSize: "18px" }}>
              <b style={{ fontSize: "24px" }}>About Us:-</b>You don’t need to
              outright say, “our mission is ____,” but you should convey the
              mission of your business in your About Us copy. This is key for
              attracting talent, as well as leads that have Corporate Social
              Responsibility (CSR) goals.
            </p>
            <p className="my-1 px-3 logo" style={{ fontSize: "18px" }}>
              <b style={{ fontSize: "24px" }}>Our History :-</b>Every business
              has an origin story worth telling, and usually, one that justifies
              why you even do business and have clients. Some centennial
              enterprises have pages of content that can fit in this section,
              while startups can tell the story of how the company was born, its
              challenges, and its vision for the future.
            </p>
          </div>
        </div>

        <div
          className="row pb-5 pt-2 mt-5 section"
          style={{
            backgroundColor: "#FBAB7E",
            backgroundImage:
              "linear-gradient(to right top, #d16ba5, #b96dab, #9f6ead, #866faa, #6f6ea3, #6d6ea5, #6b6fa7, #696fa9, #7e6fb6, #986dbe, #b569c1, #d362bf)",
          }}
        >
          <h2 className="text-center my-3 logo">
            <b className="section-title px-3">Contact Us</b>
          </h2>
          <div className="col-lg-6 col-md-6 col-12">
            <iframe
              width="625"
              height="475"
              src="https://maps.google.com/maps?q=bareilly&t=k&z=12&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              style={{
                borderRadius: "15px",
              }}
            ></iframe>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-light">
            <form className="mt-3">
              <div className="d-grid">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="d-grid my-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="d-grid my-3">
                <label for="mobile">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  className="form-control"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="d-grid my-3">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  cols="100"
                  rows="4"
                  className="form-control"
                  placeholder="Enter message"
                ></textarea>
              </div>
              <div className="d-grid my-3">
                <button className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
