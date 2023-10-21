import TransactionItemDetailsDto from "../models/TransactionItemDetailsDto";
import TransactionObject from "../models/TransactionItemDto";
import axiosClient from "./axiosClient";
import ResponseErrors from "./models/ResponseErrors";
import { API_BASE_URL } from "./settings";

export const API = {
  getCardList: async function (): Promise<string[] | ResponseErrors> {
    const response = await axiosClient
      .request({
        method: "GET",
        url: "/trans/all/list",
      })
      .then((res: any) => {
        if (res.status !== 200) {
          const error = {
            error: res.data,
            errorStatus: res.status,
          } as unknown as ResponseErrors;
          return error;
        } else {
          return res.data as string[];
        }
      })
      .catch((error) => {
        const err = {
          error: error.response.data,
          errorStatus: error.response.status,
        } as unknown as ResponseErrors;
        return err;
      });
    return response;
  },

  fetchTransactions: async function (): Promise<TransactionObject[] | any> {
    fetch(API_BASE_URL + "/trans/all/list")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        console.log("then data", data);

        const mappedItem = data.map((item: TransactionObject) => {
          const itm = {
            id: item.id,
            transaction: {
              id: item.id,
            },
            // invoiceDetails: {
            //   productList: [
            //     {
            //       id: item.invoiceRows.product.id,
            //       co2eTotal: item.product.id,
            //       name: item.product.name,
            //       singlePrice: item.product.singlePrice,
            //       sector: "Sector",
            //       category: "Category",
            //     },
            //   ],
            // },
          };

          return itm;
        });

        console.log("mappedItem", mappedItem);
        // const item = {
        //   id: data.id,
        //   transaction: {
        //     id: data.id,
        //   },
        //   invoiceDetails: {
        //     productList: [
        //       {
        //         id: data.invoiceRows.product.id,
        //         co2eTotal: data.product.id,
        //         name: data.product.name,
        //         singlePrice: data.product.singlePrice,
        //         sector: "Sector",
        //         category: "Category",
        //       },
        //     ],
        //   },
        // };

        // console.log("mapped item", item);
      });
  },
};
