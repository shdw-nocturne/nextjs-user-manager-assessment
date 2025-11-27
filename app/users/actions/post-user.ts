"use server";

import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";
import { UserTypes } from "../types/user.types";

export default async function postUser(
	userData: Omit<UserTypes, "id">
): Promise<{ success: boolean; error?: string; data?: UserTypes }> {
	try {
		const filePath = path.join(process.cwd(), "data", "users.json");

		const fileData = await fs.readFile(filePath, "utf-8");

		const users: UserTypes[] = JSON.parse(fileData);

		const newUser: UserTypes = {
			...userData,
			id: users.length + 1,
		};

		users.push(newUser);
		await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");

		//Refetch the users list after adding a new user
		revalidatePath("/users");

		return { success: true, data: newUser };
	} catch (error) {
		console.error("Error creating user:", error);
		return { success: false, error: "Failed to create user" };
	}
}
