/**
 * TODO:
 * 1. Implement boilerpalte for GET, POST, PUT, DELETE methods for basic text
 * 2. implement json mcq builder ts file to test performance
 **/

import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const router = new Hono();
router.use(prettyJSON());

// Handle 404
router.notFound((c) => {
  return c.text("404 bro, resource can't be found", 404);
});

// Handle 500
router.onError((err, c) => {
  console.error(`${err}`);
  return c.text("505, something went wrong", 500);
});

// Hello World
router.get("/", (c) => c.text("Hello world"));

// Serve JSON
router.get("/test", (c) => {
  return c.json({ message: "test" });
});

export { router };
