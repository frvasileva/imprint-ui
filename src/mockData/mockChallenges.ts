import ChallangeItemDto from "../models/ChallengeItemDto";

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
    title: "Family challenge",
    description:
      "Take a challenge with your family, earn additional carbon points together and donate for a sustainable tomorrow.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "group",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenges/family.png",
  },
  {
    id: "5",
    title: "Friend challenge",
    description:
      "Play as a team and receive additional carbon points for each given task. Donate your earnings to a cause of your choice.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "group",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenges/friends.png",
  },
  {
    id: "6",
    title: "Community challenge",
    description:
      "Race, win and earn - share your family or group achievements with the community and see how you rank. Win up to 100 additional carbon points and donate as a team",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2024"),
    type: "group",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/challenges/community.png",
  },
];
