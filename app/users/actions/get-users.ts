"use server";

import fs from "fs/promises";
import path from "path";

import { UserTypes } from "../types/user.types";

export default async function getUsers(): Promise<UserTypes[]> {
	try {
		const filePath = path.join(process.cwd(), "data", "users.json");
		const fileData = await fs.readFile(filePath, "utf-8");
		const users = JSON.parse(fileData);
		return users.sort((a: UserTypes, b: UserTypes) => b.id - a.id);
	} catch (error) {
		console.error("Error reading users file:", error);
		return [];
	}
}
