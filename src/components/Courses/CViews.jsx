import React from "react";
import A from "../img/a1.jpg";
import B from "../img/a2.jpg";
import C from "../img/a3.jpg";
import D from "../img/a4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const CViews = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const courses = [A, C, B, D, B, A];
  const history = useHistory();
  const handleRoute = id => {
    history.push("/course-details", { params: id });
  };

  return (
    <div className="p-4 ml-10 ">
      <h2 className="text-2xl text-green-900"> Running Courses </h2>
      <Slider className="m-4 p-2" {...settings}>
        {courses.map(v => {
          return (
            <div
              onClick={() => handleRoute(1)}
              className="bg-white rounded shadow max-w-xl border-4"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src={v}
                alt=""
              />
              <div className="m-2 p-2 w-48 md:w-64">
                <h1 className="font-bold text-base">English For Today</h1>
                <span>XI-XII</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CViews;
