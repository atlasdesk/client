import { createTRPCProxyClient, httpBatchLink  } from "@trpc/client"
import type { AppRouter } from "@atlasdesk/server/client"

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/rpc',
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: "",
        };
      },
    }),
  ],
});