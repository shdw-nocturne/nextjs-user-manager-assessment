import * as Yup from "yup";

export const createUserValidation = Yup.object().shape({
	name: Yup.string()
		.required("Name is required")
		.min(2, "Name must be at least 2 characters"),
	username: Yup.string()
		.required("Username is required")
		.min(3, "Username must be at least 3 characters"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phone: Yup.string().required("Phone is required"),
	website: Yup.string()
		.url("Invalid website URL")
		.required("Website is required"),
	address: Yup.object().shape({
		street: Yup.string().required("Street is required"),
		suite: Yup.string().required("Suite is required"),
		city: Yup.string().required("City is required"),
		zipcode: Yup.string().required("Zipcode is required"),
		geo: Yup.object().shape({
			lat: Yup.string().required("Latitude is required"),
			lng: Yup.string().required("Longitude is required"),
		}),
	}),
	company: Yup.object().shape({
		name: Yup.string().required("Company name is required"),
		catchPhrase: Yup.string().required("Catch phrase is required"),
		bs: Yup.string().required("Business strategy is required"),
	}),
});
