import React, {createRef} from "react";
import Reservations from "./Reservations";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {withRouter} from "react-router";
import PageWrapper from "../Pages/PageWrapper";
import InterierPage from "../Pages/InterierPage/InterierPage";
import {ArrowUturnUpIcon} from "@heroicons/react/24/outline";
import ExterierPage from "../Pages/exterierPage/ExterierPage";
import AboutPage from "../Pages/abouPage/AboutPage";
import EventsPage from "../Pages/eventsPage/EventsPage";
import Footer from "./Footer";

interface FrontScreenProps {}

const FrontScreen = (props: FrontScreenProps) => {
    const homeRef = createRef<HTMLDivElement>();
    const handleClick = () => {
        if (homeRef.current)
            window.scrollTo({
                top: homeRef.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
    };
    const Overlay = () => {
        return <div className={"absolute inset-0 bg-gray-300 bg-opacity-20"} />;
    };
    return (
        <div className="h-full w-full bg-transparent flex flex-col">
            <div className="FrontScreen relative flex flex-col justify-center items-center grow w-full ">
                <div className="absolute left-1/7 sm:left-0" ref={homeRef}>
                    <Reservations />
                    <div className="BUTTON fixed bottom-5 right-0 pr-2 lg:pr-4 ">
                        <button
                            onClick={handleClick}
                            type="button"
                            className="lg:h-14 h-8 w-8 lg:w-14 p-2 bg-orange-400 rounded-full"
                        >
                            <ArrowUturnUpIcon className="text-white" />
                        </button>
                    </div>
                </div>
                <div className={"w-screen h-screen flex flex-col"}>
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        navigation
                        effect={"slide"}
                        speed={600}
                        slidesPerView={1}
                        loop
                        className={"w-full h-full"}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide className="w-full">
                            <Overlay />
                            <img
                                src="/assets/images/Placeholder1.jpg"
                                className="lg:w-full h-[800px] lg:h-full object-cover"
                                alt={""}
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                            <Overlay />
                            <img
                                src="/assets/images/ChataBG.jpg"
                                className=" h-full lg:w-full object-cover "
                                alt={""}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <PageWrapper pageId={"interier"}>
                <InterierPage />
            </PageWrapper>
            <PageWrapper pageId={"exterier"}>
                <ExterierPage />
            </PageWrapper>
            <PageWrapper pageId={"o-nas"}>
                <AboutPage />
            </PageWrapper>
            <PageWrapper pageId={"event"}>
                <EventsPage />
            </PageWrapper>
            <Footer />
        </div>
    );
};

export default withRouter(FrontScreen);
