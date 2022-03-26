# minioms

Mini OMS is an Order Management System with minimal functionality, but ready to
grow.
Currently, it manages entities such as customers

**Main libs**
- Express (The main framework to create APIs servers)
- Typescript (The typed javascript)
- Sequelize (The ORM)
- Umzug (An agnostic framework to manage migrations and seeders)
- mocha (A framework to run unit tests)
- chai/chai-http/chai-json-schema (The assertion utilities and features to be used with mocha)

**Install dependencies**
```shell
npm install
```

**Run tests**
```shell
npm test
```

**Run Migrations UP/DOWN**
```shell
node migrate.js up
node migrate.js down
```

**Run Seeders UP/DOWN**
```shell
node seed.js up
node seed.js down
```
