const { getUser } = require('../shared/user-utils');
const { QueueClient } = require("@azure/storage-queue");
const uuidv1 = require("uuid/v1");

module.exports = async function (context, req) {
  // Get the user details from the request
  const user = getUser(req);

  const connectionString = "DefaultEndpointsProtocol=https;AccountName=cscchallenge1;AccountKey=6y4UPgZHkguAyR9rDWqH0VfirDI+oBZz+3AK8clTzmXsUkUmgo23O7x/IHsHfziRGpoH+I+lIahXaaLQY/606w==;EndpointSuffix=core.windows.net"
  const queueClient = new QueueClient(connectionString, "orders");
  
  // Get the pre-order from the request
  const order = {
    Id: uuidv1(),
    User: user.userDetails,
    Date: new Date().toJSON(),
    IcecreamId: req.body.icecreamId,
    Status: 'New',
    DriverId: null,
    FullAddress: '1 Microsoft Way, Redmond, WA 98052, USA',
    LastPosition: null,
  };

  await queueClient.sendMessage(JSON.stringify(order));
  
  context.res.status(201);
};
