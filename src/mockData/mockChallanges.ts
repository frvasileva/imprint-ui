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
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_public_transport.png",
  },
  {
    id: "2",
    title: "Shop local products",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "personal",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_local_products.jpg",
  },
  {
    id: "3",
    title: "Buy more than 100 sustainable products",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "personal",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_sustainable_products.jpg",
  },
  {
    id: "4",
    title: "Eat home",
    description:
      "Nulla feugiat velit et aliquet egestas. Integer sit amet iaculis arcu, quis congue dui. Etiam elit augue, volutpat at fermentum a, facilisis et ipsum. Curabitur ligula sapien, auctor nec dignissim ac, sollicitudin a est. Vestib",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "group",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_local_products.jpg",
  },
];
