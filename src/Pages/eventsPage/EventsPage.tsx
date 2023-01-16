import React from "react";
import EventsCard from "./EventsCard";

interface ContactsPageProps {}

const EventsPage = (props: ContactsPageProps) => {
  return (
    <section className="h-full flex flex-col  lg:p-10 ">
      <div className="pb-6">
        <span className="text-gray-800 text-2xl lg:text-4xl font-roboto uppercase font-semibold">
            Eventy
        </span>
      </div>
        <EventsCard/>

    </section>
  );
};

export default EventsPage;
