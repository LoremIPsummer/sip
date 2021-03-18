# SIP - NodeJs REST Web Service API

## Introduction

The application consists of two different projects, an example NextJs frontend, and a NodeJs backend, which are connected to each other via the [concurrently](https://www.npmjs.com/package/concurrently) package. 

## Installation

    yarn install
    yarn run dev
The server will be running at port 3500.
## Backend folder structure
|**Folder (src)**  | **Description** |
|--|--|
| **controllers** | These classes are responsible for handling the incoming HTTP requests. |
| **entity** | These are our domain classes. By using the decorators provided by the [typeORM](https://www.npmjs.com/package/typeorm), we can use them in our custom repositories.  |
| **repositories** |  If a class extends the `Repository<Foo>` base class, and has the `@EntityRepository(Foo)` decorator, it becomes the repository of the `Foo` entity.| 

### Database Configuration
Inside the root folder, we have our custom configuration, called `ormconfig.json`which basically tells the ORM to use our defined configuration and database driver. It makes an abstraction over the "raw" oracledb driver.

## IOC : Controllers - Repositories
We can use our repositories by injecting them into our controllers. Because the controllers specified in the [routing-controllers](https://www.npmjs.com/package/routing-controllers) package uses a different technique for dependency injection, we have to make two IOC containers, one for the controllers, and another one for the repositories. The index.ts file serves as a bootstrap class for doing it so.












