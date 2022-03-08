"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");

const pointOfView = require("point-of-view");
const handlebars = require("handlebars");

// const isDev = process.env.NODE_ENV !== "production";

// const fastifyStatic = isDev && require(`fastify-static`);

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  // if (isDev) {
  //   fastify.register(fastifyStatic, {
  //     root: path.join(__dirname, "public"),
  //   });
  // }

  fastify.register(pointOfView, {
    engine: { handlebars },
    root: path.join(__dirname, "views"),
    layout: "layout.hbs",
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  // Fastify will call this function and use its output in cases where a route cannot be found
  // (which includes routes that haven't been registered with the requested HTTP verb).
  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== "GET") {
      reply.status(405);
      return "Method not allowed";
    }
    return `Not Found\n`;
  });
};
