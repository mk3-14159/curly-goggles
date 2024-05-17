import { serve } from "@hono/node-server";
import { router } from "./routes/router";

const app = router;
serve({
  fetch: app.fetch,
  port: 3000,
});
