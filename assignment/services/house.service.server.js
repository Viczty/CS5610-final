var houseModel = require('../model/house/house.model.server');

module.exports = function (app) {

//house related api
  app.get("/api/user/:userId/house", findAllHousesForUser);
  app.get("/api/user/:userId/order", findAllHousesForBuyer);
  app.get("/api/user/:userId/agentOrder", findAllHousesForAgent);
  app.get("/api/house", findAllHouses);
  app.get("/api/house/:houseId", findHouseById);
  app.post("/api/user/:userId/house", createHouse);
  app.put("/api/house/:houseId", updateHouse);
  app.put("/api/house/:houseId/order", deleteOrder);
  app.delete("/api/house/:houseId", deleteHouse);

  //delete me when push to heroku
  app.get("/api/populateHouses", populateHouses);

  var houses_pop = [
    {name: "Facebook", developerId: "456", description: "Lorem"},
    {name: "Tweeter", developerId: "456", description: "Lorem"},
    {name: "Gizmodo", developerId: "456", description: "Lorem"},
    {name: "Go", developerId: "123", description: "Lorem"},
    {name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {name: "Checkers", developerId: "123", description: "Lorem"},
    {name: "Chess", developerId: "234", description: "Lorem"}
  ]

  function populateHouses(req, res) {
    console.log("pop DB!");
    //res.send("pop DB!");
    houseModel.populateHouses(houses_pop)
      .then(
        function (houses) {
          console.log("house populated!");
          res.json(houses);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        }
      );
  }

  function findAllHousesForUser(req, res) {
    let id = req.params.userId;
    houseModel.findAllHousesForUser(id).exec(
      function (err, houses) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(houses);
      }
    );
  }

  function findAllHousesForBuyer(req, res) {
    let id = req.params.userId;
    houseModel.findAllHousesForBuyer(id).exec(
      function (err, houses) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(houses);
      }
    );
  }

  function findAllHousesForAgent(req, res) {
    let id = req.params.userId;
    houseModel.findAllHousesForAgent(id).exec(
      function (err, houses) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(houses);
      }
    );
  }

  function findAllHouses(req, res) {
    houseModel.findAllHouses().exec(
      function (err, houses) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(houses);
      }
    );
  }

  function findHouseById(req, res) {
    let id = req.params.houseId;

    houseModel.findHouseById(id).exec(
      function (err, house) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(house);
      }
    );
  }

  function createHouse(req, res) {
    console.log("create house");
    let userId = req.params.userId;
    let house = req.body;
    houseModel
      .createHouse(userId, house)
      .then(
        function (house) {
          console.log("house created!");
          res.json(house);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        }
      )
  }

  function updateHouse(req, res) {
    console.log("update house");
    let houseId = req.params.houseId;
    let house = req.body;
    houseModel.updateHouse(houseId, house).exec(
      function (err, house) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(house);
      }
    );
  }

  function deleteHouse(req, res) {
    console.log("delete house");
    let houseId = req.params.houseId;
    houseModel.deleteHouse(houseId).exec(
      function (err, house) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(house);
      }
    );
  }

  function deleteOrder(req, res) {
    let houseId = req.params.houseId;
    let house = req.body;
    houseModel.updateHouse(houseId, house).exec(
      function (err, house) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(house);
      }
    );
  }
}
