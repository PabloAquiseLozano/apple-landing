import { Apple1, Apple2, Apple3 } from "../images/index.js";
import dayjs from "dayjs";

export const events = [
  {
    img: Apple1,
    title: "WWDC",
    date: dayjs("06-10-2024", "DD-MM-YYYY").format("MMM DD, YYYY"),
    description:
      "Introducing Apple Intelligence, AI for the rest of us. And exciting updates coming with iOS 18, iPadOS 18, macOS Sequoia, watchOS 11, and visionOS 2.",
  },
  {
    img: Apple2,
    title: "Apple Event",
    date: dayjs("05-07-2024", "DD-MM-YYYY").format("MMM DD, YYYY"),
    description:
      "Introducing iPhone 15 Pro, iPhone 15, Apple Watch Series 9, Apple Watch Ultra 2, and a major step toward making all our products carbon neutral by 2030.",
  },
  {
    img: Apple3,
    title: "Apple Event",
    date: dayjs("08-30-2024", "DD-MM-YYYY").format("MMM DD, YYYY"),
    description:
      "Introducing Apple Vision Pro, the new 15‑inch MacBook Air with M2, Mac Studio with M2 Max and M2 Ultra, Mac Pro with M2 Ultra, and previews of iOS 17, iPadOS 17, macOS Sonoma, and watchOS 10.",
  },
];
