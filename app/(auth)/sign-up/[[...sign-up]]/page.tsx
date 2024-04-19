"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { SignupValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const SignupForm = () => {
	const [toastText, SetToastText] = useState("");
	const { toast } = useToast();
	const form = useForm<z.infer<typeof SignupValidation>>({
		resolver: zodResolver(SignupValidation),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof SignupValidation>) {
		try {
			const username = values.username;
			const email = values.email;
			// it will send req to api and check if user exists
			const resUserExist = await fetch("/api/UserExists", {
				method: "POST",
				body: JSON.stringify({ email, username }),
				headers: { "Content-Type": "application/json" },
			});

			const { userExists } = await resUserExist.json();
			console.log(userExists); // true or false

			if (userExists) {
				// should render toast saying the user that the username or email is already taken
				SetToastText("Username or email is already taken");
				toast({
					title: toastText,
				});
				console.log("User already exists");
				return;
			} else {
				console.log("User does not exist");
			}

			const res = await fetch("/api/register", {
				method: "POST",
				body: JSON.stringify(values),
				headers: { "Content-Type": "application/json" },
			});

			if (res.ok) {
				form.reset();
				console.log(values);
			} else {
				console.log("User Registration failed");
			}
		} catch (error) {
			console.log("Error has occurred", error);
		}
	}

	return (
		<Form {...form}>
			<div className="sm:w-420 flex-center flex-col ">
				<h1 className="text-2xl font-bold">FILTERATE</h1>
				<h2 className="h3 md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
				<p className="text-gray-300 font-grotesk small-medium md:base-regular mt-12">
					To use Filterate Enter your Details
				</p>
				<Link href="/" className="text-xs font-sans text-blue-200 underline">
					Go Back
				</Link>

				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex-col w-full mt-6"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										className="shad-input border-none bg-n-6"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										type="text"
										className="shad-input border-none bg-n-6"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										className="shad-input border-none bg-n-6"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										className="shad-input border-none bg-n-6"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-col items-start justify-center">
						<span className="mt-4">
							Already have an account?{" "}
							<Link href="/sign-in" className="text-blue-300">
								Login
							</Link>
						</span>
						<button
							type="submit"
							className="bg-n-1 text-n-8 px-8 mt-3 py-2 rounded-md hover:bg-n-3 transition-all"
							onClick={() => {
								console.log("Successfull");
								toast({
									title: 'toastText',
								});
							}}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</Form>
	);
};

const AuthLayout = () => {
	const isAuthenticated = false;
	const router = useRouter();

	if (isAuthenticated) {
		router.push("/dashboard");
		return null;
	}

	return (
		<>
			<div className="flex h-screen overflow-hidden">
				<section className="flex flex-1 justify-center items-center flex-col py-10 bg-n-9">
					<SignupForm />
				</section>

				<Image
					width={500}
					height={1000}
					src="/assets/images/side-img.svg"
					alt=""
					className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
				/>
			</div>
		</>
	);
};

export default AuthLayout;
