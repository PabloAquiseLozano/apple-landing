import React from "react";
import { PresentationSection } from "./PresentationSection.jsx";
import { AnnouncementSection } from "./AnnouncementSection.jsx";
import { EventsSection } from "./EventsSection.jsx";

export const Home = () => {
  return (
    <div>
      <PresentationSection />
      <AnnouncementSection />
      <EventsSection />
    </div>
  );
};
