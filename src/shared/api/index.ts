import { client } from "./client";
import serverSide from "./server";

export const callAPI = {
  clientSide: client,
  serverSide,
};
