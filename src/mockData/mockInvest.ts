import { InvestCategory } from "../models/InvestDto";

export const mockInvest: InvestCategory[] = [
  {
    id: "1",
    title: "Support a cause",
    description: "Donate to causes close to your heart.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "cause",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/initiatives/supportCause.png",

    invest: [
      {
        id: "34",
        title: "Operation: Teddy Bear",
        description:
          "An NGO that brings back Christmas to 10 000+ children in Bulgaria deprived of parental care, children with disabilities and children at risk every year.",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/socialCauses/teddyBear.png",
        location: "Bulgaria",
      },
      {
        id: "3",
        title: "Teamseas",
        description:
          "#TeamSeas is one of the biggest and most-impactful cleanup projects of all time. Check out their cutting-edge river Interceptors, info on locally-organised cleanups, ghost-gear removal efforts and professional expeditions to areas where we can have the greatest conservation impact.          ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/socialCauses/teamSeas.png",
        location: "Worldwide",
      },
      {
        id: "344",
        title: "Break the Cage",
        description:
          "At International Animal Rescue that saves animals from suffering, but also rehabilitates and releases them back into the wild and works to protect their precious natural habitats.          ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/socialCauses/animalRescueInternational.jpg",
        location: "Worldwide",
      },
    ],
  },
  {
    id: "2",
    title: "Emerging business",
    description: "Fund sustainable businesses",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "sustainablity",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/initiatives/emergingBusiness.png",
    invest: [
      {
        id: "18",
        title: "Support women entrepreneurs",
        description:
          "Empower women in Africa, sustain and grow successful businesses, so they can live to their full potential. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/emergingBusiness/womenOwnedBusiness.jpg",
        location: "Africa",
      },
      {
        id: "23",
        title: "Belgibaev’s craftsmanship",
        description:
          "Family handmade and organic craftsmanship works from local products since 1992. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/emergingBusiness/handmanKazakstan.jpg",
        location: "Kazakhstan",
      },
      {
        id: "37",
        title: "Mandu House",
        description:
          "A small family owned restaurant for traditional mongolian dumplings. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/emergingBusiness/mongolianTraditionalMeal.jpg",
        location: "Kazakhstan",
      },
    ],
  },
  {
    id: "3",
    title: "Education",
    description: "Contribute to education campaigns",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "sustainablity",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/initiatives/education.jpg",
    invest: [
      {
        id: "100",
        title: "Access Drum",
        description:
          "Access Drum is a startup organising courses for software testing, designed specifically for blind people who use a screen reader.",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/education/accessDrum.png",
        location: "Bulgaria",
      },
      {
        id: "200",
        title: "Village school in Oryahovo",
        description:
          "A renovation project for an elementary school that has sat vacant since it closed doors in 1998. The building can accommodate up to 100 students who are currently commuting 40 km a day to attend school in the neighbouring village. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/education/school.jpg",
        location: "Bulgaria",
      },
      {
        id: "300",
        title: "Green Bus",
        description:
          "Support the funding of an electrical school bus to transport students to and from schools in various villages in one of the poorest regions in Chile. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/education/greenBus.jpg",
        location: "Chile",
      },
    ],
  },
];
