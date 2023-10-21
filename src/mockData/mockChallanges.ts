import ChallangeItemDto from "../models/ChallangeItemDto";

export const mockChallanges: ChallangeItemDto[] = [
  {
    id: "1",
    title: "Use public transport",
    description:
      "Use public transportation at least 10 times for the month and get additional carbon points and a badge to share with your friends and the Imprim community.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "personal",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_public_transport.png",
  },
  {
    id: "2",
    title: "Shop local products",
    description:
      "Purchase products grown locally for one month and get additional carbon points and a special badge to share with your friends and the Imprim community!",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "personal",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenge_local_products.jpg",
  },
  {
    id: "3",
    title: "Buy sustainable products",
    description:
      "Shop organic-certified produce from stores near you for 10 consecutive days and earn extra carbon points! Share your success with Imprint friends and community!",
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
