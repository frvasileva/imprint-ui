import axiosClient from "./axiosClient";
import ResponseErrors from "./models/ResponseErrors";

export const API = {
  getCardList: async function (): Promise<string[] | ResponseErrors> {
    const response = await axiosClient
      .request({
        method: "GET",
        url: "/card/list",
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

  FetchCardList: async function (): Promise<any> {
    // fetch("http://23ab-95-43-222-106.ngrok-free.app/card/list").then(
    //   (response) => {
    //     console.log("response in api:", response);
    //     return response.json();
    //   }
    // );

    fetch("http://540d-212-5-142-232.ngrok-free.app/address/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  },
};
