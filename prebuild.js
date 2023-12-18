#!/usr/bin/env node
/* eslint-env es6 */
const fs = require("fs");
const path = require("path");

const environmentFilesDirectory = path.join(
  __dirname,
  "../../src/environments"
);
const targetEnvironmentTemplateFileName = "environment.template.ts";
const targetEnvironmentFileName = "environment.ts";

const environmentTemplate = fs.readFileSync(
  path.join(environmentFilesDirectory, targetEnvironmentTemplateFileName),
  { encoding: "utf-8" }
);

let updatedEnvironment = environmentTemplate;

updatedEnvironment = updatedEnvironment.replace(
  "projectId",
  process.env.FIREBASE_PROJECT_ID
);
updatedEnvironment = updatedEnvironment.replace(
  "appId",
  process.env.FIREBASE_APP_ID
);
updatedEnvironment = updatedEnvironment.replace(
  "databaseURL",
  process.env.FIREBASE_DATABASE_URL
);
updatedEnvironment = updatedEnvironment.replace(
  "storageBucket",
  process.env.FIREBASE_STORAGE_BUCKET
);
updatedEnvironment = updatedEnvironment.replace(
  "apiKey",
  process.env.FIREBASE_API_KEY
);
updatedEnvironment = updatedEnvironment.replace(
  "authDomain",
  process.env.FIREBASE_AUTH_DOMAIN
);
updatedEnvironment = updatedEnvironment.replace(
  "messagingSenderId",
  process.env.FIREBASE_MESSANGING_SENDER_ID
);

// Write environment file
fs.writeFileSync(
  path.join(environmentFilesDirectory, targetEnvironmentFileName),
  updatedEnvironment
);

process.exit(0);
