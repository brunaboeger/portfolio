import { sql } from "@vercel/postgres";
import {
  User,
  Profiles,
  Projects,
  Experiences,
  Studies,
  Abilities
} from "@/app/lib/definitions";

export async function fetchProfiles() {
  try {
    const data = await sql<Profiles>`SELECT * FROM profiles`;
    console.log("Data is being fetched...");

    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch revenue data");
  }
}