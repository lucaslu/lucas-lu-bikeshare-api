/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bikes").del();
  await knex("bikes").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      name: "RadRover 6 Plus Electric Fat Tire Bike",
      description:
        "The RadRover 6 Plus is the latest advancement of our flagship fat tire model and a next-level riding experience.",
      address: "503 Broadway",
      city: "Vancouver",
      host_name: "Lucas",
      price: 100,
    },
    {
      id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      name: "Trek FX+ 2",
      description:
        "FX+ 2 is a lightweight city electric bike that’s designed to make everyday excursions faster and more fun. ",
      address: "33 Pearl Street SW",
      city: "Burnaby",
      host_name: "Parmin Aujla",
      price: 100,
    },
  ]);
};
