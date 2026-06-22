import { Client, Databases, TablesDB } from "appwrite";

const client = new Client();

client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const db = new TablesDB(client)
const databases = new Databases(client)

export { client, db, databases };
