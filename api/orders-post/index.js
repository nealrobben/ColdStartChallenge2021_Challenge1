const { getUser } = require('../shared/user-utils');
const { QueueClient } = require("@azure/storage-queue");
//const uuidv1 = require("uuid/v1");

module.exports = async function (context, req) {
  // Get the user details from the request
  const user = getUser(req);

  // Get the pre-order from the request
  
  
  // TODO: add the pre-order JSON document in a queue
  
  const connectionString = "DefaultEndpointsProtocol=https;AccountName=cscchallenge1;AccountKey=6y4UPgZHkguAyR9rDWqH0VfirDI+oBZz+3AK8clTzmXsUkUmgo23O7x/IHsHfziRGpoH+I+lIahXaaLQY/606w==;EndpointSuffix=core.windows.net"
  const queueClient = new QueueClient(connectionString, "orders");
  
  // await queueClient.sendMessage("Test");
  
  context.res.status(201);
};
