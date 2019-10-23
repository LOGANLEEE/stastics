"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "PrePost",
    embedded: false
  },
  {
    name: "TempPost",
    embedded: false
  },
  {
    name: "SortedPosts",
    embedded: false
  },
  {
    name: "SavedPosts",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Bobae",
    embedded: false
  },
  {
    name: "RuliWeb",
    embedded: false
  },
  {
    name: "Clien",
    embedded: false
  },
  {
    name: "Ilbe",
    embedded: false
  },
  {
    name: "Bullpen",
    embedded: false
  },
  {
    name: "Etoland",
    embedded: false
  },
  {
    name: "SLRClub",
    embedded: false
  },
  {
    name: "TodayHumor",
    embedded: false
  },
  {
    name: "Cook",
    embedded: false
  },
  {
    name: "Gasengi",
    embedded: false
  },
  {
    name: "PpompPu",
    embedded: false
  },
  {
    name: "Instiz",
    embedded: false
  },
  {
    name: "TheQoo",
    embedded: false
  },
  {
    name: "FmKorea",
    embedded: false
  },
  {
    name: "DogDrip",
    embedded: false
  },
  {
    name: "ErrorLog",
    embedded: false
  },
  {
    name: "HumorUniv",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
