const { v4: uuidv4 } = require("uuid");
const env = process.env.NODE_ENV || "development";
const knex = require("knex")(require("../knexfile")[env]);

const findAll = (_req, res) => {
  knex("bikes")
    .then((bikes) => {
      res.status(200).json(bikes);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving bikes ${err}`);
    });
};

const findOne = (req, res) => {
  knex("bikes")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        res
          .status(404)
          .send(`Error retrieving bike with ID: ${req.params.id} `);
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving bike ${err}`);
    });
};

const add = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.address ||
    !req.body.city ||
    !req.body.host_name ||
    !req.body.price
  ) {
    return res
      .status(400)
      .send("Please provide all required fields in the request");
  }

  const newBikeId = uuidv4();
  knex("bikes")
    .insert({ ...req.body, id: newBikeId })
    .then((_data) => {
      knex("bikes")
        .where({ id: newBikeId })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch((err) => res.status(400).send(`Error creating Bike: ${err}`));
};

module.exports = {
  findAll,
  findOne,
  add,
};
