"use client";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldContent,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
	FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Form, Formik } from "formik";
import { toast } from "sonner";
import { postUser } from "../actions";
import { UserTypes } from "../types/user.types";
import { createUserValidation } from "../utils/create-user-validation";

const defaultInitialValues: Omit<UserTypes, "id"> = {
	name: "",
	username: "",
	email: "",
	phone: "",
	website: "",
	address: {
		street: "",
		suite: "",
		city: "",
		zipcode: "",
		geo: {
			lat: "",
			lng: "",
		},
	},
	company: {
		name: "",
		catchPhrase: "",
		bs: "",
	},
};

export function CreateUserForm() {
	const handleSubmit = async (values: Omit<UserTypes, "id">) => {
		try {
			const res = await postUser(values);
			if (res.success) {
				const data = res.data as UserTypes;
				const { name } = data;
				toast.success(`User ${name} created successfully!`);
			} else {
				toast.error("Failed to create user. Please try again.");
			}
		} catch (error) {
			console.error("Error creating user:", error);
			toast.error("Failed to create user. Please try again.");
		}
	};

	return (
		<Formik
			initialValues={defaultInitialValues}
			validationSchema={createUserValidation}
			onSubmit={async (values, { resetForm }) => {
				await handleSubmit(values);
				resetForm();
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isSubmitting,
			}) => (
				<Form className="w-full ">
					<ScrollArea className="h-[70vh] w-full  px-4 py-2">
						<FieldSet>
							<FieldGroup className="grid gap-2 grid-cols-2">
								<Field data-invalid={!!(errors.name && touched.name)}>
									<FieldLabel htmlFor="name">Full Name</FieldLabel>
									<FieldContent>
										<Input
											id="name"
											name="name"
											type="text"
											placeholder="John Doe"
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={!!(errors.name && touched.name)}
										/>
										<FieldError>{touched.name && errors.name}</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!(errors.username && touched.username)}>
									<FieldLabel htmlFor="username">Username</FieldLabel>
									<FieldContent>
										<Input
											id="username"
											name="username"
											type="text"
											placeholder="johndoe"
											value={values.username}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={!!(errors.username && touched.username)}
										/>

										<FieldError>
											{touched.username && errors.username}
										</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!(errors.email && touched.email)}>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<FieldContent>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="john@example.com"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={!!(errors.email && touched.email)}
										/>
										<FieldError>{touched.email && errors.email}</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!(errors.phone && touched.phone)}>
									<FieldLabel htmlFor="phone">Phone</FieldLabel>
									<FieldContent>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="1-234-567-8900"
											value={values.phone}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={!!(errors.phone && touched.phone)}
										/>
										<FieldError>{touched.phone && errors.phone}</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!(errors.website && touched.website)}>
									<FieldLabel htmlFor="website">Website</FieldLabel>
									<FieldContent>
										<Input
											id="website"
											name="website"
											type="url"
											placeholder="https://example.com"
											value={values.website}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={!!(errors.website && touched.website)}
										/>
										<FieldError>{touched.website && errors.website}</FieldError>
									</FieldContent>
								</Field>
							</FieldGroup>

							<FieldSeparator>Address Information</FieldSeparator>

							<FieldGroup className="grid gap-4 grid-cols-2">
								<Field
									data-invalid={
										!!(errors.address?.street && touched.address?.street)
									}
								>
									<FieldLabel htmlFor="address.street">Street</FieldLabel>
									<FieldContent>
										<Input
											id="address.street"
											name="address.street"
											type="text"
											placeholder="123 Main St"
											value={values.address.street}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.address?.street && touched.address?.street)
											}
										/>
										<FieldError>
											{touched.address?.street && errors.address?.street}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(errors.address?.suite && touched.address?.suite)
									}
								>
									<FieldLabel htmlFor="address.suite">Suite/Apt</FieldLabel>
									<FieldContent>
										<Input
											id="address.suite"
											name="address.suite"
											type="text"
											placeholder="Apt. 4B"
											value={values.address.suite}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.address?.suite && touched.address?.suite)
											}
										/>
										<FieldError>
											{touched.address?.suite && errors.address?.suite}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(errors.address?.city && touched.address?.city)
									}
								>
									<FieldLabel htmlFor="address.city">City</FieldLabel>
									<FieldContent>
										<Input
											id="address.city"
											name="address.city"
											type="text"
											placeholder="New York"
											value={values.address.city}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.address?.city && touched.address?.city)
											}
										/>
										<FieldError>
											{touched.address?.city && errors.address?.city}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(errors.address?.zipcode && touched.address?.zipcode)
									}
								>
									<FieldLabel htmlFor="address.zipcode">Zipcode</FieldLabel>
									<FieldContent>
										<Input
											id="address.zipcode"
											name="address.zipcode"
											type="text"
											placeholder="10001"
											value={values.address.zipcode}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.address?.zipcode && touched.address?.zipcode)
											}
										/>
										<FieldError>
											{touched.address?.zipcode && errors.address?.zipcode}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(errors.address?.geo?.lat && touched.address?.geo?.lat)
									}
								>
									<FieldLabel htmlFor="address.geo.lat">Latitude</FieldLabel>
									<FieldContent>
										<Input
											id="address.geo.lat"
											name="address.geo.lat"
											type="text"
											placeholder="-71.4197"
											value={values.address.geo.lat}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(
													errors.address?.geo?.lat && touched.address?.geo?.lat
												)
											}
										/>
										<FieldError>
											{touched.address?.geo?.lat && errors.address?.geo?.lat}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(errors.address?.geo?.lng && touched.address?.geo?.lng)
									}
								>
									<FieldLabel htmlFor="address.geo.lng">Longitude</FieldLabel>
									<FieldContent>
										<Input
											id="address.geo.lng"
											name="address.geo.lng"
											type="text"
											placeholder="71.7478"
											value={values.address.geo.lng}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(
													errors.address?.geo?.lng && touched.address?.geo?.lng
												)
											}
										/>
										<FieldError>
											{touched.address?.geo?.lng && errors.address?.geo?.lng}
										</FieldError>
									</FieldContent>
								</Field>
							</FieldGroup>

							<FieldSeparator>Company Information</FieldSeparator>

							<FieldGroup className="grid grid-cols-2">
								<Field
									data-invalid={
										!!(errors.company?.name && touched.company?.name)
									}
								>
									<FieldLabel htmlFor="company.name">Company Name</FieldLabel>
									<FieldContent>
										<Input
											id="company.name"
											name="company.name"
											type="text"
											placeholder="Test Corp"
											value={values.company.name}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.company?.name && touched.company?.name)
											}
										/>
										<FieldError>
											{touched.company?.name && errors.company?.name}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={
										!!(
											errors.company?.catchPhrase &&
											touched.company?.catchPhrase
										)
									}
								>
									<FieldLabel htmlFor="company.catchPhrase">
										Catch Phrase
									</FieldLabel>
									<FieldContent>
										<Input
											id="company.catchPhrase"
											name="company.catchPhrase"
											type="text"
											placeholder="Innovative solutions for modern problems"
											value={values.company.catchPhrase}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(
													errors.company?.catchPhrase &&
													touched.company?.catchPhrase
												)
											}
										/>

										<FieldError>
											{touched.company?.catchPhrase &&
												errors.company?.catchPhrase}
										</FieldError>
									</FieldContent>
								</Field>

								<Field
									data-invalid={!!(errors.company?.bs && touched.company?.bs)}
								>
									<FieldLabel htmlFor="company.bs">
										Business Strategy
									</FieldLabel>
									<FieldContent>
										<Input
											id="company.bs"
											name="company.bs"
											type="text"
											placeholder="Technology driven growth"
											value={values.company.bs}
											onChange={handleChange}
											onBlur={handleBlur}
											aria-invalid={
												!!(errors.company?.bs && touched.company?.bs)
											}
										/>

										<FieldError>
											{touched.company?.bs && errors.company?.bs}
										</FieldError>
									</FieldContent>
								</Field>
							</FieldGroup>
						</FieldSet>
					</ScrollArea>

					<div className="flex gap-4 mt-4">
						<Button type="reset" variant="outline" className="flex-1 min-w-0">
							Reset
						</Button>
						<Button
							type="submit"
							disabled={isSubmitting}
							className="flex-1 min-w-0"
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
