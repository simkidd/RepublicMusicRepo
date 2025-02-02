"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Button from "../shared/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import CustomCursor, { CustomCursorRef } from "../shared/CustomCursor";
import { IVideo } from "@/interfaces/video.interface";
import { getVideos } from "@/lib/data";

const VideoSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const cursorRef = useRef<CustomCursorRef | null>(null);
  const [videoArticles, setVideoArticles] = useState<IVideo[]>([])

  // get video data
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await getVideos();
    
            setVideoArticles(res?.data.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

  // Split articles into chunks of 5 for Swiper slides
  const chunkedArticles = [];
  for (let i = 0; i < videoArticles.length; i += 4) {
    chunkedArticles.push(videoArticles.slice(i, i + 4));
  }

  // Function to navigate to the previous slide
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleMouseEnter = () => {
    if (cursorRef.current) cursorRef.current.setHovering(true);
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.setHovering(false);
  };

  return (
    <section className="pt-[50px] ">
      <div className="m-auto w-[95%] block">
        <h2 className="text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] lg:translate-y-[55px] z-[2] relative pointer-events-none mb-[10px]">
          Videos
        </h2>
      </div>

      {/* view content */}
      <div className="w-full mx-auto">
        {/* arrow buttons */}
        <div className="relative">
          <button onClick={handlePrev} className="slick-prev ">
            prev
          </button>
          <button onClick={handleNext} className="slick-next">
            next
          </button>
        </div>

        <CustomCursor ref={cursorRef} />

        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectFade]} // Enable the Navigation module
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show one slide (which contains multiple cards)
          effect={"fade"}
          navigation={false}
          loop
          className="w-full"
        >
          {chunkedArticles.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="w-full relative flex flex-row flex-wrap h-full min-h-[1px] float-left">
                {chunk.map((videoArticle) => (
                  <article
                    key={videoArticle.id}
                    className="video-article__card"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <figure className="relative block">
                      <div className="video-article_card__thumb">
                        <div className="video-article_card__thumb-overlay">
                          <Link
                            href={videoArticle.entity_featured_url}
                            target="_blank"
                            className="play-button"
                            title="Play Video"
                          >
                            <span>Play Video</span>
                          </Link>
                        </div>
                        <div
                          className="__thumb-bg-image"
                          style={{
                            backgroundImage: `url(${videoArticle.meta_data.image_placeholder_url})`,
                          }}
                        ></div>
                      </div>
                      <div className="video-article_card__footer">
                        <div className="__footer-header">
                          <h3>{videoArticle.title_name}</h3>
                        </div>
                      </div>
                    </figure>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto w-[95%] mt-10 flex justify-end ">
        <Link href="/videos" className="mb-[50px] w-fit">
          <Button variant="outline">view all</Button>
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;
