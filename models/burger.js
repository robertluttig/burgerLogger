// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
      orm.all("burgers", (res) => {
          cb(res);
      });
  },
  // The variables cols and vals are arrays.
  create: (newBurger, cb) => {
      orm.create("burgers", newBurger, (res) => {
          cb(res);
      });
  },
  update: (burgerData, criteria, cb) => {
      orm.update("burgers", burgerData, criteria, (res) => {
          cb(res);
      });
  },

  delete: (condition, cb) => {
      orm.delete("burgers", condition, (res) => {
        cb(res);
      });
    },
};

module.exports = burger;
