import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Maxx Burgers API",
    description: "Maxx Burgers API for managing burgers, categories, orders, and user authentication.",
  },
  host: `localhost:${process.env.PORT || 8080}`,
  basePath: "/",
  schemes: ["http", "https"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc);
