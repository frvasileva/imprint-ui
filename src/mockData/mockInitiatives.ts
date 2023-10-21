import { InitiativesCategory } from "../models/InitiativesDto";

export const mockInitiatives: InitiativesCategory[] = [
  {
    id: "1",
    title: "Support a cause",
    description: "Donate causes close to your heart.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "cause",
    coverPhoto: "challenge_local_products.jpg",

    initiatives: [
      {
        id: "34",
        title: "Operation: Teddy Bear",
        description:
          "An NGO that brings back Christmas to 10 000+ children in Bulgaria deprived of parental care, children with disabilities and children at risk every year.",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "challenge_local_products.jpg",
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
        coverPhoto: "challenge_local_products.jpg",
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
        coverPhoto: "challenge_local_products.jpg",
        location: "Worldwide",
      },
    ],
  },
  {
    id: "2",
    title: "Emerging business",
    description: "Fund sustainable businesses in developing regions",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "sustainablity",
    coverPhoto: "challenge_local_products.jpg",
    initiatives: [
      {
        id: "1",
        title: "Use subway more than 10 times per month",
        description:
          "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "challenge_local_products.jpg",
        location: "",
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
    coverPhoto: "challenge_local_products.jpg",
    initiatives: [
      {
        id: "1",
        title: "Use subway more than 10 times per month",
        description:
          "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "challenge_local_products.jpg",
        location: "",
      },
    ],
  },
];
