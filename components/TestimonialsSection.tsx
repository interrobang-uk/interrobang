import { useState } from "react"
import Section from "./Section"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import a from "../assets/14.jpg"
import b from "../assets/15.jpg"
import c from "../assets/5.jpg"

import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"

const TestimonialsSection = () => {
  return (
    <Section
      title={
        <>
          <h2>Clients say</h2>

          <nav className="slider-nav">
            <button className="slider-nav__prev">
              <svg
                width="17"
                height="28"
                viewBox="0 0 17 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 26L3 14L15 2" stroke="black" stroke-width="4" />
              </svg>

              <span className="visually-hidden">Previous</span>
            </button>

            <button className="slider-nav__next">
              <svg
                width="17"
                height="28"
                viewBox="0 0 17 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 26L3 14L15 2" stroke="black" stroke-width="4" />
              </svg>

              <span className="visually-hidden">Next</span>
            </button>
          </nav>
        </>
      }
    >
      <Swiper
        className="slider"
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={false}
        initialSlide={1}
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".slider-nav__next",
          prevEl: ".slider-nav__prev",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <blockquote>
            <svg
              width="73"
              height="60"
              viewBox="0 0 73 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.332 59.8438H0.890625V40.2148C0.890625 32.2721 1.57422 26.0221 2.94141 21.4648C4.3737 16.8424 6.97786 12.7083 10.7539 9.0625C14.5299 5.41667 19.3477 2.55208 25.207 0.46875L30.5781 11.7969C25.1094 13.6198 21.1706 16.1589 18.7617 19.4141C16.418 22.6693 15.181 26.9987 15.0508 32.4023H28.332V59.8438ZM70.1328 59.8438H42.6914V40.2148C42.6914 32.207 43.375 25.9245 44.7422 21.3672C46.1745 16.8099 48.7786 12.7083 52.5547 9.0625C56.3958 5.41667 61.2135 2.55208 67.0078 0.46875L72.3789 11.7969C66.9102 13.6198 62.9714 16.1589 60.5625 19.4141C58.2188 22.6693 56.9818 26.9987 56.8516 32.4023H70.1328V59.8438Z"
                fill="#fffdeb"
              />
            </svg>

            <q>
              You&apos;ve done more on this in a month than a whole year of
              people talking about it
            </q>
            <cite>A client</cite>

            <Image src={a} alt="" />
          </blockquote>
        </SwiperSlide>

        <SwiperSlide>
          <blockquote>
            <svg
              width="73"
              height="60"
              viewBox="0 0 73 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.332 59.8438H0.890625V40.2148C0.890625 32.2721 1.57422 26.0221 2.94141 21.4648C4.3737 16.8424 6.97786 12.7083 10.7539 9.0625C14.5299 5.41667 19.3477 2.55208 25.207 0.46875L30.5781 11.7969C25.1094 13.6198 21.1706 16.1589 18.7617 19.4141C16.418 22.6693 15.181 26.9987 15.0508 32.4023H28.332V59.8438ZM70.1328 59.8438H42.6914V40.2148C42.6914 32.207 43.375 25.9245 44.7422 21.3672C46.1745 16.8099 48.7786 12.7083 52.5547 9.0625C56.3958 5.41667 61.2135 2.55208 67.0078 0.46875L72.3789 11.7969C66.9102 13.6198 62.9714 16.1589 60.5625 19.4141C58.2188 22.6693 56.9818 26.9987 56.8516 32.4023H70.1328V59.8438Z"
                fill="#fffdeb"
              />
            </svg>

            <q>
              [Interrobang have] built a reputation as people who get things
              done and can be trusted to always deliver good results
            </q>
            <cite>A client</cite>
            <Image src={b} alt="" />
          </blockquote>
        </SwiperSlide>

        <SwiperSlide>
          <blockquote>
            <svg
              width="73"
              height="60"
              viewBox="0 0 73 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.332 59.8438H0.890625V40.2148C0.890625 32.2721 1.57422 26.0221 2.94141 21.4648C4.3737 16.8424 6.97786 12.7083 10.7539 9.0625C14.5299 5.41667 19.3477 2.55208 25.207 0.46875L30.5781 11.7969C25.1094 13.6198 21.1706 16.1589 18.7617 19.4141C16.418 22.6693 15.181 26.9987 15.0508 32.4023H28.332V59.8438ZM70.1328 59.8438H42.6914V40.2148C42.6914 32.207 43.375 25.9245 44.7422 21.3672C46.1745 16.8099 48.7786 12.7083 52.5547 9.0625C56.3958 5.41667 61.2135 2.55208 67.0078 0.46875L72.3789 11.7969C66.9102 13.6198 62.9714 16.1589 60.5625 19.4141C58.2188 22.6693 56.9818 26.9987 56.8516 32.4023H70.1328V59.8438Z"
                fill="#fffdeb"
              />
            </svg>

            <q>
              Easily one of the most effective communicators and presenters that
              I have had the pleasure to be on a project with
            </q>
            <cite>A client</cite>
            <Image src={c} alt="" />
          </blockquote>
        </SwiperSlide>
      </Swiper>
    </Section>
  )
}

export default TestimonialsSection
