import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserPlus } from "lucide-react";
import { getUsers } from "../actions";

const UsersList = async () => {
	const users = await getUsers();

	if (!users || users.length === 0) {
		return (
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<UserPlus />
					</EmptyMedia>
					<EmptyTitle>Users not found</EmptyTitle>
					<EmptyDescription>You have not added any users yet.</EmptyDescription>
				</EmptyHeader>
			</Empty>
		);
	}

	return (
		<section className="w-full space-y-4">
			<ScrollArea className="w-full  h-screen max-h-[600px] rounded-md border p-4">
				<div className="flex flex-col gap-4">
					{users?.map(
						({ id, name, company: { name: company_name }, email }) => (
							<Item variant="outline" key={id} className="w-full">
								<ItemContent>
									<ItemTitle>{name}</ItemTitle>
									<ItemDescription>
										{`Company: ${company_name} | Email: ${email}`}
									</ItemDescription>
								</ItemContent>
							</Item>
						)
					)}
				</div>
			</ScrollArea>
		</section>
	);
};

export default UsersList;
