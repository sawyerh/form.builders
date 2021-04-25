const fastify = require("fastify")({
  logger: true,
});
const ejs = require("ejs");
const path = require("path");
const pointOfView = require("point-of-view"); // Fastify templates engine

const handleFatalError = (error) => {
  fastify.log.error(error);
  process.exit(1);
};

const init = async () => {
  /**
   * Configure server
   */
  const start = async () => {
    try {
      await fastify.listen(3000);
    } catch (error) {
      handleFatalError(error);
    }
  };

  /**
   * Setup template engine
   */
  fastify.register(pointOfView, {
    engine: {
      ejs,
    },
    includeViewExtension: true,
    templates: "views",
    options: {
      filename: path.resolve("views"),
    },
  });

  /**
   * Setup database
   * todo: https://www.prisma.io/
   */

  /**
   * Setup routes
   */
  fastify.get("/", function (request, response) {
    response.view("index");
  });

  /**
   * Start it up
   */
  await start();
  console.log(`Server running on ${fastify.server.address().port}`);
};

process.on("unhandledRejection", handleFatalError);

init();
