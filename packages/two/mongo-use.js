const { MongoMemoryServer } = require("mongodb-memory-server");

// the real use, for example in tests
(async () => {
  const mongoServer = await MongoMemoryServer.create();
  console.log(mongoServer.getUri());
  mongoServer.stop();
})();
