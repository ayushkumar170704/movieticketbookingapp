import { Inngest } from "inngest";
import User from "../models/User.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking",
    signingKey: process.env.INNGEST_SIGNING_KEY,
 });

// Inngest function to save user data to DB
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      image: image_url || "",
    };
    await User.create(userData);
    return { ok: true };
  }
);

// Inngest function to delete user from DB
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
    return { ok: true };
  }
);

// Inngest function to update user data in DB
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      image: image_url || "",
    };
    await User.findByIdAndUpdate(id, userData, { upsert: true, new: true });
    return { ok: true };
  }
);

// Export all functions
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
