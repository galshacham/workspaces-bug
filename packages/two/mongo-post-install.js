const { MongoMemoryServer } = require("mongodb-memory-server");

// Install the server and stops it, the first time will save it to cache, since inner install in workspace is not called
(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoServer.stop();
})();
