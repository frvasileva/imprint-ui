import { InvestCategory } from "../models/InvestDto";

export const mockInvest: InvestCategory[] = [
  {
    id: "1",
    title: "Deposit",
    description: "Get a checking account instantly in a sustainable neobank or a traditional one your choice",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "cause",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/deposit.jpg",

    invest: [
      {
        id: "34",
        title: "",
        description:
          "Join Holky - a revolutionary neobanking service using 100% sustainable ways to create and digitally store data. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/holky.png",
        location:""
      },
      {
        id: "3",
        title: "",
        description:
          "Use the most important banking services digitally and free of charge. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/commerzbank.png",
        location:""
      },
      {
        id: "344",
        title: "",
        description:
          "Save, Spend and Invest - Your complete banking solution in just three steps! ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/diba.png",
        location:""
      },
    ],
  },
  {
    id: "2",
    title: "Sell",
    description: "Exchange carbon points to cash. Sell your active carbon points and get cash instantly into your bank account.",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "sustainablity",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/sell.png",
    invest: [
      {
        id: "18",
        title: "",
        description:
          "Offset your carbon emissions with Commerzbank. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/commerzbank.png",
        location:""
      },
      {
        id: "23",
        title: "",
        description:
          "Offset your carbon emissions with HSBC UK. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/hsbc.png",
        location:""
      },
      {
        id: "37",
        title: "",
        description:
          "Offset your carbon emissions with Bank of America. ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/bankOfAmerica.png",
        location:""
      },
    ],
  },
  {
    id: "3",
    title: "Return of investment",
    description: "Invest your carbon points now and start earning dividends in no time! ",
    startDate: new Date("01/12/2023"),
    expirationDate: new Date("31/12/2023"),
    type: "sustainablity",
    coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/roi.jpg",
    invest: [
      {
        id: "100",
        title: "",
        description:
          "Track your investments with a secure and trusted bank that fits right in your pocket! ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/neobank.png",
        location:""
      },
      {
        id: "200",
        title: "",
        description:
          "Dital investment made smart! ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/diInv.png",
        location:""
      },
      {
        id: "300",
        title: "",
        description:
          "Invest in your future! ",
        startDate: new Date("01/12/2023"),
        expirationDate: new Date("31/12/2023"),
        type: "cause",
        coverPhoto: "https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/investments/commerzbank.png",
        location:""
      },
    ],
  },
];
