import React from "react";

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
  return (
      <section className="grow flex flex-col items-center text-center  pt-8">
        <div className="lg:pb-6 pb-10">
        <span className="text-gray-800  text-3xl lg:text-4xl font-roboto uppercase font-semibold">
          O chate pod Ostrym vrchom
        </span>
        </div>
        <div className="w-full h-full flex flex-wrap justify-between">
          <div className="lg:p-10 ">
            <div className="p-1 overflow-hidden max-h-[400px] max-w-1/2">
              <img
                  src="/assets/images/chata-historia-02.jpg"
                  alt={""}
                  className="block object-cover  w-full h-full rounded-lg"
              />{" "}
            </div>
            <div className=" p-1 overflow-hidden max-h-[450px] max-w-1/2 ">
              <img
                  src="/assets/images/chata-historia-01.jpg"
                  alt={""}
                  className="block object-cover  w-full h-full rounded-lg"
              />{" "}
            </div>
          </div>

          <div className=" lg:text-left lg:text-2xl lg:pt-24 lg:pr-12 lg:w-1/2   sm:pr-6 sm:min-w-[250px] font-light font-roboto  text-gray-60 ">
            <h1 className="lg:text-6xl font-bold text-gray-800 lg:mb-8 pt-4 pb-4">
              Historia
            </h1>

            <div
                className={
                  " text-sm lg:text-2xl lg:gap-24 text-justify lg:text-left"
                }
            >
              <p>
                S výstavbou začalo mesto Trenčín 18. júla 1942 podľa projektu
                staviteľa Alexandra Marákyho. <br />
                Stavba bola daná do užívania 1. júla 1944. V tomto roku bola
                vybudovaná i prístupová cesta v dĺžke 1100 m v smere od horárne.
              </p>
              <br />
              <p>
                Na chate sa vystriedalo niekoľko chatárov, slúžila na turistické
                účely v letnej i zimnej sezóne, bola strediskom lyžiarov.
              </p>
              <br />
              <p>
                Chata bola od roku 2006 uzatvorená a od roku 2016 prešla
                kompletnou rekonštrukciou s prístavbou, aby mohla aj naďalej
                slúžiť pre rodinnú turistiku, rekreáciu.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutPage;
