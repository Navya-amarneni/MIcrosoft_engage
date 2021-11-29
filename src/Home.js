import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // https://www.metro.ca/userfiles/image/heathwellness/economicalfood-header.jpg
          src="https://media.istockphoto.com/photos/close-up-white-paper-desk-calendar-with-blurred-bokeh-background-and-picture-id1307098713?b=1&k=20&m=1307098713&s=170667a&w=0&h=Le5hvOW5S9EH78tKmgPDdm7_M_x0vCpp6C37Tmqd6zY="
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="PH 401"
            rating={4}
            image="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_1066_15760724382046526.jpg"
          />
          <Product
            id="49538094"
             title="HS 404"
            // price={50.0}
            rating={5}
            image="https://blog.hubspot.com/hubfs/how-to-write-a-case-study.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
             title="MA 201"
            // price={25}
            rating={5}
           image="https://www.irishtimes.com/polopoly_fs/1.4376102.1602188635!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
          />
          <Product
            // id="23445930"
             title="CS 345"
            // price={25.00}
            rating={5}
             image="https://blog.mmumullana.org/wp-content/uploads/2019/12/blog-image-for-Computer-Science.jpg"
          />
          <Product
            // id="3254354345"
             title="CH 202"
            // price={598.99}
            rating={4}
             image="https://www.thoughtco.com/thmb/XuJo7-P3gRDQshW69iFDNkFdS1U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            // id="90829332"
             title="HS 231"
            // price={1094.98}
            rating={4}
             image="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/02/literature.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
