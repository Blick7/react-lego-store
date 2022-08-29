import React, { useRef, useState } from 'react';

import SwiperCore from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DrawStarsRating from './DrawStartsRating';
import SliderAddButton from '../../UI/SliderAddButton/SliderAddButton';

import classes from './ProductsCarousel.module.scss';

interface IProps {
  title: string;
  items: {
    url: string;
    title: string;
    rating: number;
    tag: string;
    price: string;
  }[];
}

const ProductsCarousel = (props: IProps) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const [leftBtnDisabled, setLeftBtnDisabled] = useState(true);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(false);

  const leftBtnClass = leftBtnDisabled
    ? `${classes['swiper-button-prev']} ${classes['swiper-button-disabled']}`
    : classes['swiper-button-prev'];

  const rightBtnClass = rightBtnDisabled
    ? `${classes['swiper-button-next']} ${classes['swiper-button-disabled']}`
    : classes['swiper-button-next'];
  return (
    <>
      <div className={classes.container}>
        <h2>{props.title}</h2>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={30}
          navigation={{
            prevEl: swiperNavPrevRef?.current,
            nextEl: swiperNavNextRef?.current,
          }}
          modules={[Navigation]}
          className={classes.swiper}
          breakpoints={{
            1600: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          onInit={(swiper: SwiperCore) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const navigation = swiper.params.navigation;
              if (navigation !== undefined) {
                navigation.prevEl = swiperNavPrevRef.current;
                navigation.nextEl = swiperNavNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          }}
          onSlideChange={(swiper) => {
            const slidesPerView = swiper.originalParams.slidesPerView;
            if (slidesPerView !== undefined) {
              if (swiper.realIndex === 0) {
                setLeftBtnDisabled(true);
                setRightBtnDisabled(false);
              } else if (
                swiper.realIndex ===
                props.items.length - +slidesPerView
              ) {
                setRightBtnDisabled(true);
                setLeftBtnDisabled(false);
              } else {
                setRightBtnDisabled(false);
                setLeftBtnDisabled(false);
              }
            }
          }}
        >
          {props.items.map((item, index) => {
            return (
              <SwiperSlide key={index} className={classes['swiper-slide']}>
                <div>
                  <div className={classes['image-container']}>
                    <img className={classes.img} src={item.url} alt="hello" />
                    <div className={classes.wishlist}>
                      <FavoriteBorderIcon
                        className={classes['wishlist-icon']}
                      />
                      <span>Add to wish list</span>
                    </div>
                    <div className={classes.tag}>{item.tag}</div>
                  </div>
                  <div className={classes.description}>
                    <div>{item.title}</div>
                    <div>
                      <DrawStarsRating rating={item.rating} />
                    </div>
                    <div>{item.price}</div>
                    <SliderAddButton />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={leftBtnClass} ref={swiperNavPrevRef}>
            <ArrowBackIosNewIcon />
          </div>
          <div className={rightBtnClass} ref={swiperNavNextRef}>
            <ArrowForwardIosIcon />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ProductsCarousel;
