"use clients";
import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; /*Pagination; */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";

import "swiper/css/navigation";
import TopBannerItem from "../components/TopBannerItem";
import MSelect from "../components/ui/MSelect";
import MSearch from "../components/ui/MSearch";
import Post from "../components/Post";
import Product from "../components/Product";
import Ads from "../components/Ads";

import useWindowDimensions from "../utils/useWindowDimensions";
import styles from "../styles/Home.module.css";

const Landing = () => {
  const { width } = useWindowDimensions();
  const [topSwiper, setTopSwiper] = useState({
    slidesPerView: 1,
    navigation: true,
  });
  const [postSwiper, setPostSwiper] = useState({
    slidesPerView: "auto",
    navigation: false,
  });
  const [productSwiper, setProductSwiper] = useState({
    slidesPerView: "auto",
    navigation: false,
    spaceBetween: 10,
  });
  const [adsSwiper, setAdsSwiper] = useState({
    slidesPerView: 1,
    navigation: false,
  });
  const topBannerData = [
    {
      image: "/media/back.jpg",
      title: "Impermeables",
      content: "Composting is a sustainable and eco-friendly way to reduce waste",
      href: "#",
    },
    {
      image: "/media/back.jpg",
      title: "Impermeables",
      content: "Composting is a sustainable and eco-friendly way to reduce waste",
      href: "#",
    },
    {
      image: "/media/back.jpg",
      title: "Impermeables",
      content: "Composting is a sustainable and eco-friendly way to reduce waste",
      href: "#",
    },
    {
      image: "/media/back.jpg",
      title: "Impermeables",
      content: "Composting is a sustainable and eco-friendly way to reduce waste",
      href: "#",
    },
  ];
  const d_learning = ["All", "Products", "Services"];
  const kind = ["All", "Posts", "Messages"];
  const post = [
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      image: "",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      like_cnt: 123,
      answer_cnt: 3,
    },
  ];
  const product = [
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
    {
      _id: "1",
      avatar: "/media/user.8b21d8a6.png",
      username: "Gabriel",
      created_at: "4 days ago",
      image: "/media/food1.49ea0320.png",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
      price: 25,
    },
  ];
  const ads = [
    {
      _id: "1",
      image: "/media/services.8c8d77f1.png",
      title: "Explore",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
    },
    {
      _id: "1",
      image: "/media/services.8c8d77f1.png",
      title: "Explore",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
    },
    {
      _id: "1",
      image: "/media/services.8c8d77f1.png",
      title: "Explore",
      content:
        "Founded with a mission to support small-scale farms, Founded with a mission to support small-scale farms",
    },
  ];
  useEffect(() => {
    if (width >= 1280) {
      setTopSwiper({ slidesPerView: 4, navigation: true });
      setProductSwiper({ slidesPerView: 4, navigation: true, spaceBetween: 10 });
      setPostSwiper({ slidesPerView: 2, navigation: true });
      setAdsSwiper({ slidesPerView: 3, navigation: false });
    } else if (width >= 1024) {
      setTopSwiper({ slidesPerView: 3, navigation: true });
      setProductSwiper({ slidesPerView: 3, navigation: true, spaceBetween: 10 });
      setPostSwiper({ slidesPerView: 2, navigation: true });
      setAdsSwiper({ slidesPerView: 2, navigation: false });
    } else if (width >= 768) {
      setTopSwiper({ slidesPerView: 2, navigation: true });
      setProductSwiper({ slidesPerView: 2, navigation: true, spaceBetween: 10 });
      setPostSwiper({ slidesPerView: 2, navigation: true });
      setAdsSwiper({ slidesPerView: 2, navigation: false });
    } else {
      setTopSwiper({ slidesPerView: 1, navigation: true });
      setProductSwiper({ slidesPerView: "auto", navigation: false, spaceBetween: 10 });
      setPostSwiper({ slidesPerView: "auto", navigation: false });
      setAdsSwiper({ slidesPerView: "auto", navigation: false });
    }
    if (width >= 1400) {
      setProductSwiper({ slidesPerView: 4, navigation: true, spaceBetween: 60 });
    }
  }, [width]);
  return (
    <Container>
      {/* {topBanner} */}
      <Container>
        <Row className={clsx(styles.topBanner, "topBanner")}>
          <Col className="px-0">
            <Swiper
              {...topSwiper}
              spaceBetween={10}
              modules={[Navigation]}
              className={styles.topBannerSwiper}
            >
              {topBannerData.map((value, index) => (
                <SwiperSlide key={index}>
                  <TopBannerItem {...value} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="mt-2 d-flex justify-content-center gap-2">
            <MSelect data={d_learning} />
            <MSearch name="Keyword" placeholder="Keyword" />
            <Button className="btn-danger">Submit</Button>
          </Col>
        </Row>
      </Container>
      <div className={styles.divider}></div>
      {/* {PostSection} */}
      <Container>
        <Row className={styles.postSection}>
          <Col className={clsx(styles.postHeader, "mb-4 mt-4")} md={6}>
            <h3>Posts</h3>
            <div className="mt-3 d-flex gap-2">
              <MSelect data={kind} />
              <MSearch name="Keyword" placeholder="Keyword" />
            </div>
            <div className="mt-3 d-flex gap-2">
              <img src="/media/user.8b21d8a6.png" width="40" height="40" />
              <Form.Control
                type="text"
                placeholder="What's on your mind?"
                className="w-100 border rounded form-control mr-2"
              />
              <a href="#">
                <img src="/media/picture.png" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <Swiper {...postSwiper} spaceBetween={10} modules={[Navigation]}>
              {post.map((value, index) => {
                if (index % 2 == 1) {
                  return <></>;
                }
                return (
                  <SwiperSlide key={index} className={styles.post}>
                    <div className="d-flex flex-column justify-between gap-3">
                      <Post {...value} />
                      {post[index + 1] && <Post {...post[index + 1]} />}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
      {/* {ProductSection} */}
      <Container>
        <Row className={clsx(styles.productSection, "mt-4 mb-4")}>
          <Col className={clsx(styles.productHeader, "mb-4 mt-4")}>
            <Form.Select
              aria-label="All"
              className={clsx(styles.formSelect, styles.productFormSelect)}
            >
              <option value="Products">Products</option>
              <option value="Services">Services</option>
            </Form.Select>
            <div className={clsx(styles.productSearchFormSelect, "mt-3 d-flex gap-2")}>
              <MSearch name="Keyword" placeholder="Keyword" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <Swiper {...productSwiper} modules={[Navigation]}>
              {product.map((value, index) => {
                if (index % 2 == 1) {
                  return <></>;
                }
                return (
                  <SwiperSlide key={index} className={styles.product}>
                    <div className="d-flex flex-column justify-between gap-3">
                      <Product {...value} />
                      {product[index + 1] && <Product {...product[index + 1]} />}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
      {/* {AdsSection} */}
      <Container>
        <Row>
          <Col className="px-0 mt-4">
            <Swiper {...adsSwiper} spaceBetween={10} modules={[Navigation]}>
              {ads.map((value, index) => (
                <SwiperSlide key={index} className={styles.clickImage}>
                  <Ads {...value} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
      {/* {Empty} */}
      <Container className="empty"></Container>
    </Container>
  );
};

export default Landing;
