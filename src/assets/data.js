import {
  serv1,
  serv2,
  serv3,
  man,
  woman,
  eye,
  feather,
  sun,
  guy,
  good,
  girl,
  blogPic1,
  blogPic3,
  profile1,
  profile2,
  profile3,
  blogPic2,
} from "./images";

export const serviceData = [
  {
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
    image: serv1,
  },
  {
    title: "Even cooler feature",
    text: "Learning curve network effects return on investment.",
    image: serv2,
  },
  {
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
    image: serv3,
  },
];

export const valueData = [
  {
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    image: man,
    reverse: false,
    list: [
      "We connect our customers with the best.",
      "Advisor success customer launch party.",
      "Business-to-consumer long tail.",
    ],
  },
  {
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    image: woman,
    reverse: true,
    list2: [
      {
        title: "We connect our customers with the best.",
        image: feather,
      },
      {
        title: "Advisor success customer launch party.",
        image: eye,
      },
      {
        title: "Business-to-consumer long tail.",
        image: sun,
      },
    ],
  },
];

export const enterpriseData = [
  {
    title: `“Buyer buzz partner network disruptive non-disclosure agreement business”`,
    name: "Albus Dumbledore",
    position: "Manager",
    company: "Howarts",
    image: girl,
  },
  {
    title: `“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”`,
    name: "Severus Snape",
    position: "Manager",
    company: "Slytherin",
    image: good,
  },
  {
    title: `“Release facebook responsive web design business model canvas seed money monetization.”`,
    name: "Harry Potter",
    position: "Team Leader",
    company: "Gryffindor",
    image: guy,
  },
];

export const blogData = [
  {
    title: "Pitch termsheet backing validation focus release.",
    name: "Chandler Bing",
    image: blogPic1,
    profile: profile1,
  },
  {
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    name: "Rachel Green",
    image: blogPic2,
    profile: profile2,
  },
  {
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    name: "Monica Geller",
    image: blogPic3,
    profile: profile3,
  },
];
