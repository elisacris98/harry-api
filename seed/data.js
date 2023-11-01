import db from "../db/connection.js";
import House from "../models/House.js";
import Character from "../models/Character.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Character.create(characters);
  await House.create(houses);

  console.log(chalk.magenta("Characters and Houses created!"));

  // Close DB Connection
  await db.close();
};

insertData();