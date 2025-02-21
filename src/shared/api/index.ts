import { client } from "./client";
import { get, post } from "./server";

export const callAPI = {
  clientSide: client,
  serverSide: { get, post },
};
