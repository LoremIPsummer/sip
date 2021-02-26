import "reflect-metadata";
import {
  createExpressServer,
  useContainer as useContainerForRouting,
} from "routing-controllers";
import {} from "routing-controllers";
import Container from "typedi";
import { createConnection, useContainer as useContainerForOrm } from "typeorm";
import { CourseController } from "./controllers/CourseController";
import { InstructorController } from "./controllers/InstructorController";

useContainerForRouting(Container);
useContainerForOrm(Container);

createConnection()
  .then(async (connection) => {
    const expressApp = createExpressServer({
      controllers: [CourseController, InstructorController],
    });

    expressApp.listen(3500);

    console.log("Server is up and running at port 3500");
  })
  .catch((error) => console.log(error));
