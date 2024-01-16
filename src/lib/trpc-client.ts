import { createTRPCProxyClient, httpBatchLink  } from "@trpc/client"
import type { AppRouter } from "@atlasdesk/server/client"
import Cookies from "js-cookie";
import {Buffer} from "buffer"

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/rpc',
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: `Bearer ${Buffer.from(Cookies.get("accessToken") || "", "utf-8").toString("base64")}`,
        };
      },
    }),
  ],
});