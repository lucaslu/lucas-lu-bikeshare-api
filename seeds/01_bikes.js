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
      price: 95,
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
    {
      id: "5ec0efdd-0dd0-4a0d-837f-d25d53a888c2",
      name: "RadCity Electric Commuter Bike Version 4",
      description:
        "Our iconic commuter bike is back in its Raddest version yet. New for this year, the RadCity 4 comes in a single, 18.5” frame size to fit a wider variety of riders.",
      address: "275 W 5th Ave",
      city: "Vancouver",
      host_name: "Showroom",
      price: 89,
    },
    {
      id: "f6ff0360-faa3-4fe7-b725-e7b4879021e0",
      name: "Cowboy 4 ST",
      description:
        "Meet the Cowboy 4 ST for a modern spin on a comfortable classic. Step in with ease and ride ahead on an electric bike that's built around you.",
      address: "709 Morar Turnpike",
      city: "Toronto",
      host_name: "Al Kuhn",
      price: 53,
    },
    {
      id: "10dc3296-51cb-4916-95d9-c948489a274e",
      name: "Propella 7-Speed",
      description:
        "It has trustworthy components like a Samsung battery and Shimano disc brakes, plus nifty accessories like a cool suspension seat. It ships directly to you, which is handy if you'd like to avoid a bike shop.",
      address: "636 Beer Lakes",
      city: "Toronto",
      host_name: "Becky Dietrich",
      price: 64,
    },
    {
      id: "61d0953f-8ea7-491d-af65-40f3937b2559",
      name: "LeMond Bikes Prolog",
      description:
        "This everyday carbon fiber ebike designed by Greg LeMond delivers relaxed racing geometry for easy handling and maneuverability.",
      address: "888 Deborah Track",
      city: "Calgary",
      host_name: "Cindy Huels",
      price: 77,
    },
    {
      id: "e644d000-fc68-4980-822c-9861b0cf6d22",
      name: "Xtracycle Stoker",
      description:
        "On a tandem bike, the person who sits in the front and steers is called the pilot, while the person in back who only pedals is called the stoker.",
      address: "4239 Heidi Port",
      city: "Leduc",
      host_name: "Jorge Mosciski",
      price: 67,
    },
    {
      id: "c7c3fc02-f411-421f-a24f-2f30f490c2c3",
      name: "Urban Arrow Family Electric Cargo Bike",
      description:
        "Meet the newest member of your tribe, the new 2022 Urban Arrow Family Cargo Bike. One that takes you and your children wherever you want to go. No more worries about your busy schedule, kids needing to be places, fetching groceries, or shopping trips. ",
      address: "264 Leonora Port",
      city: "Saint-Polycarpe",
      host_name: "Rodolfo Gerhold",
      price: 63,
    },
    {
      id: "cff25888-5835-45dd-8e64-1778e4590231",
      name: "Jackrabbit Bike",
      description:
        "With a max speed of 20mph and weighing an ultralight 24 lbs, the JackRabbit micro ebike is small, but mighty. Like a chihuahua, but loveable.",
      address: "79131 Gerlach River",
      city: "Cold Lake",
      host_name: "Jana Stokes",
      price: 55,
    },
    {
      id: "a20fe3f5-0dcb-46c6-9daf-4279abd8b515",
      name: "Montague M-E1",
      description:
        "The Montague M-E1 is the world’s first full-size performance foldable e-bike.",
      address: "6933 Simonis Hollow",
      city: "Richmond",
      host_name: "Hugo Simonis",
      price: 69,
    },
  ]);
};
