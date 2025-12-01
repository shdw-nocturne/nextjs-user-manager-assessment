import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";
import { CreateUserForm } from "./create-user-form";

const AddUserDialog = () => {
	return (
		<section className="w-full">
			<div className="flex justify-between items-center">
				<h1 className=" text-lg font-semibold">Users List</h1>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">
							<UserPlus /> Create User
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="flex items-center gap-2">
								<UserPlus />
								Create User Form
							</DialogTitle>
							<CreateUserForm />
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
};

export default AddUserDialog;
