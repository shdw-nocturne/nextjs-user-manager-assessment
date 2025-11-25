import AddUserDialog from "./components/add-user-dialog";
import UsersList from "./components/users-list";

const page = () => {
	return (
		<div className="flex  min-h-screen items-center justify-center ">
			<main className="flex  space-y-10 w-full max-w-3xl flex-col items-center justify-between ">
				<AddUserDialog />
				<UsersList />
			</main>
		</div>
	);
};

export default page;
