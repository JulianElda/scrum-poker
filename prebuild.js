#!/usr/bin/env node
/* eslint-env es6 */
const fs = require("fs");
const path = require("path");

const environmentFilesDirectory = path.join(__dirname, "../src/environments");

let updatedEnvironment = `
export const environment = {
  firebase: {
    projectId: "projectId",
    appId: "appId",
    databaseURL: "databaseURL",
    storageBucket: "storageBucket",
    apiKey: "apiKey",
    authDomain: "authDomain",
    messagingSenderId: "messagingSenderId",
  },
};
`;

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
  path.join(environmentFilesDirectory, "environment.ts"),
  updatedEnvironment
);

process.exit(0);
