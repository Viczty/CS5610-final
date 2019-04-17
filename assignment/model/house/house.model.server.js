var userModel = require('../user/user.model.server');
var mongoose = require('mongoose');
var houseSchema = require('./house.schema.server');

var houseModel = mongoose.model("House", houseSchema);


houseModel.createHouse = createHouse;
houseModel.findAllHousesForUser = findAllHousesForUser;
houseModel.findAllHousesForBuyer = findAllHousesForBuyer;
houseModel.findAllHousesForAgent = findAllHousesForAgent;
houseModel.findAllHouses = findAllHouses;
houseModel.findHouseById = findHouseById;
houseModel.updateHouse = updateHouse;
houseModel.deleteHouse = deleteHouse;

module.exports = houseModel;

//helper function
houseModel.populateHouses = populateHouses;


function populateHouses(houses) {
  return houseModel.insertMany(houses);
}

function createHouse(userId, house) {
  house.userId = userId;
  return houseModel.create(house).then(
    function (house) {
      userModel.findUserById(userId)
        .then(
          function (user) {
            user.houses.push(house);
            // userModel.updateUser(userId,user);
          }
        );
      return house;
    }
  );
}

function findAllHousesForUser(userId) {
  return houseModel.find({userId: userId});
}

function findAllHousesForBuyer(userId) {
  return houseModel.find({buyer: userId});
}

function findAllHousesForAgent(userId) {
  return houseModel.find({agent: userId});
}

function findAllHouses() {
  return houseModel.find();
}

function findHouseById(id) {
  return houseModel.findById(id);
}


function updateHouse(houseId, house) {
  return houseModel.findByIdAndUpdate(houseId, house);
}

function deleteHouse(houseId) {
  return houseModel.findByIdAndRemove(houseId);
}
