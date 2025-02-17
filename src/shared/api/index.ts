import { client } from "./client";
import { get } from "./server";

export const callAPI = {
  clientSide: client,
  serverSide: { get },
};
