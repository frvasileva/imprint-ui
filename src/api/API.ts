import TransactionItemDetailsDto from "../models/TransactionItemDetailsDto";
import TransactionObject from "../models/TransactionObject";
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

  fetchTransactions: async function (): Promise<any> {
    fetch(API_BASE_URL + "/trans/all/list")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        console.log("then data", data);

        const mappedItem = data.map((item: TransactionObject) => {
          const itm = {
            id: item.id,
            type: "low",
            createdOn: new Date(),
            footPrintPoints: item.footPrintPoints,
            invoiceRows: item.invoiceRows,
          } as TransactionObject;

          return itm;
        });
        return mappedItem;
      });
  },
};
