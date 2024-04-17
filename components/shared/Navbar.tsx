"use client";
import Link from "next/link";
import { navigation } from "@/constants";
import { HamburgerMenu } from "../design/Header";
import MenuSvg from "@/public/assets/svg/MenuSvg";
import { useState } from "react";

// Task remaining :
// 1) Page Scroll Disable when Navbar open
// 2) everything else seems okay except that hamburger fix

const Navbar = () => {
	const [openNavigation, setOpenNavigation] = useState(false);

	const toggleNavigation = () => {
		if (openNavigation) {
			setOpenNavigation(false);
			// enablePageScroll()
		} else {
			setOpenNavigation(true);
			// disablePageScroll()
		}
	};

	const handleClick = () => {
		// if(!openNavigation) return;
		// enablePageScroll();
		setOpenNavigation(false);
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
				openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
			}`}
		>
			<div className="flex items-center justify-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
				<Link
					href={"/#"}
					className="block w-[12rem] xl:mr-8 text-3xl font-bold"
				>
					FILTRATE
				</Link>

				<nav
					className={` ${
						openNavigation ? "flex" : "hidden"
					} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
				>
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map((item) => (
							<Link
								className={`block relative font-sans text-2xl uppercase text-gray-400 transition-colors hover:text-color-2 ${
									item.onlyMobile ? "lg:hidden" : ""
								} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-[12px] lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-8`}
								key={item.id}
								href={item.url}
								onClick={handleClick}
							>
								{item.title}
							</Link>
						))}
					</div>
					<HamburgerMenu />
				</nav>

				<Link
					href="/sign-up"
					className="button font-sans text-sm hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
				>
					Sign Up
				</Link>
				<Link
					href="/sign-in"
					className="button transition-all text-n-8 hover:bg-[#e0ab42] rounded-md hidden lg:flex bg-[#ffcd0aff] px-7 py-3"
				>
					Sign In
				</Link>

				<button
					className="button relative inline-flex text-n-1 px-3 lg:hidden ml-auto items-center justify-center h-11 transition-colors hover:text-color-1"
					onClick={toggleNavigation}
				>
					<span className="relative z-10">
						<MenuSvg openNavigation={openNavigation} />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
