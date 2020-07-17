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
    update: (BurgerData, criteria, cb) => {
        orm.update("burgers", BurgerData, criteria, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;