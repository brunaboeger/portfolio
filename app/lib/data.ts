// import { sql } from "@vercel/postgres";
// import {
//   User,
//   Profiles,
//   Projects,
//   Experiences,
//   Studies,
//   Abilities
// } from "@/app/lib/definitions";

// export async function fetchProfiles() {
//   try {
//     const data = await sql<Profiles>`SELECT * FROM profiles`;
//     console.log("Data is being fetched...");

//     console.log(data.rows);

//     return data.rows;
//   } catch (error) {
//     console.error("Database error: ", error);
//     throw new Error("Failed to fetch data");
//   }
// }

// export async function fetchProjects() {
//   try {
//     const data = await sql<Projects>`SELECT * FROM projects`;
//     return data.rows;
//   } catch (error) {
//     console.error("Database error: ", error);
//     throw new Error("Failed to fetch data");
//   }
// }