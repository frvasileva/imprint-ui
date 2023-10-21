import ChallangeItemDto from "../models/ChallangeItemDto";

export const mockChallanges: ChallangeItemDto[] = [
  {
    id: "1",
    title: "Use subway more than 10 times per month",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, ",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "personal",
    coverPhoto: "challenge_local_products.jpg",
  },
  {
    id: "2",
    title: "Shop local products",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "personal",
    coverPhoto: "./../../static-content/images/forest-background.jpg",
  },
  {
    id: "3",
    title: "Buy more than 100 sustainable products",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "personal",
    coverPhoto: "./../../static-content/images/forest-background.jpg",
  },
  {
    id: "4",
    title: "Eat less!",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "group",
    coverPhoto: "./../../static-content/images/forest-background.jpg",
  },
];
