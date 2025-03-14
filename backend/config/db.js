import {neon } from "@neondatabase/serverless";
import dotnev from "dotenv";

dotnev.config();

const {PGHOST ,PGDATABASE,PGUSER,PGPASSWORD}= process.env;
//creates a SQL connection using the environment variables
export const sql=neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely
//postgresql://neondb_owner:npg_GZgat0TIEL2u@ep-blue-bonus-a8yty98h-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
