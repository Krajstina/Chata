import React from "react";
import EventsCard from "./EventsCard";

interface ContactsPageProps {}

const EventsPage = (props: ContactsPageProps) => {
    return (
        <section className="grow flex flex-col items-center ">
            <div className="lg:pb-6 ">
        <span className="text-gray-800  text-3xl lg:text-4xl font-roboto uppercase font-semibold">
            Eventy
        </span>
            </div>
            <EventsCard/>

        </section>
    );
};

export default EventsPage;
