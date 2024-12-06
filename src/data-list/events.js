import { Apple1, Apple2, Apple3 } from "../images/index.js";
import dayjs from "dayjs";

export const events = [
  {
    img: Apple1,
    title: "Apple Intelligence",
    date: dayjs("06-10-2024", "DD-MM-YYYY").format("MMMM DD, YYYY"),
    description:
      "Presentamos Apple Intelligence, inteligencia artificial para el resto de nosotros. Y novedades interesantes que llegarán con iOS 18, iPadOS 18, macOS Sequoia, watchOS 11 y visionOS 2.",
  },
  {
    img: Apple2,
    title: "iPhone 15 Series",
    date: dayjs("05-07-2024", "DD-MM-YYYY").format("MMMM DD, YYYY"),
    description:
      "Presentamos el iPhone 15 Pro, el iPhone 15, el Apple Watch Series 9, el Apple Watch Ultra 2 y un gran paso hacia el objetivo de que todos nuestros productos sean carbono neutrales para 2030.",
  },
  {
    img: Apple3,
    title: "Apple Vision Pro",
    date: dayjs("08-30-2024", "DD-MM-YYYY").format("MMMM DD, YYYY"),
    description:
      "Presentamos Apple Vision Pro, la nueva MacBook Air de 15 pulgadas con M2, Mac Studio con M2 Max y M2 Ultra, Mac Pro con M2 Ultra y avances de iOS 17, iPadOS 17, macOS Sonoma y watchOS 10.",
  },
];
