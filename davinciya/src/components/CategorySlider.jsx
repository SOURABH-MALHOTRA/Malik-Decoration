import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const categories = [
  {
    name: "Apartment",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&q=80",
    link: "/offerings/apartment",
  },
  {
    name: "Villa",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    link: "/offerings/villa",
  },
  {
    name: "Corporate",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    link: "/offerings/corporate",
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    link: "/offerings/healthcare",
  },
  {
    name: "Resto",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
    link: "/offerings/resto",
  },
  {
    name: "Retail",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
    link: "/offerings/retail",
  },
];

export default function CategoriesSlider() {
  return (
    <section className="sm:hidden bg-white pt-20 ">
      <Swiper
        modules={[FreeMode]}
        slidesPerView={4.5}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        className="px-4"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <Link to={cat.link} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#e5ddd0]">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-semibold text-[#4a3728] mt-2 text-center leading-tight">
                {cat.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}