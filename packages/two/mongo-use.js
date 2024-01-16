const { MongoMemoryServer } = require("mongodb-memory-server");
(async () => {
  const mongoServer = await MongoMemoryServer.create();
  console.log(mongoServer.getUri());
  mongoServer.stop();
})();
