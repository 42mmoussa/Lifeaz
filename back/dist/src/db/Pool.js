"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "mohamad",
    password: "password",
    host: "postgres",
    port: "5432",
    database: "lifeaz"
});
exports.default = pool;
