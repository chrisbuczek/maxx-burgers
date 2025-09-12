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
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      scheme: "bearer",
      in: "header",
      description: "Enter JWT token in format: Bearer {token}",
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc);
