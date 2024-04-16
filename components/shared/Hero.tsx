'use client';
import React from "react";
import Section from "../widgets/Section";
import Image from "next/image";
import { curve, heroBackground, robot } from "@/public/assets";
import Link from "next/link";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from '@/constants'; 
import { useRef } from "react";
import Notification from "../design/Notification";

const Hero = () => {
	const parrallaxRef = useRef(null);
    return (
        <Section
            className={`pt-[12rem] -mt-[5.25rem]`}
            crosses
            crossesOffset={`lg:translate-y-[5.25rem]`}
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parrallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Link{" "}
                        <span className="inline-block relative">
                            Creative{" "}
                            {/* <Image
                                src={curve}
                                alt=""
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                            /> */}
                        </span>{" "}
                        Connection with your Perfect Match Today!
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Filterate provides a medium for video editors and clients to freely
                        choose between them. idk what i mean to say but yo got it right?
                        right
                    </p>
					<div className="flex items-center justify-center gap-4 lg:gap-10 ">
						<Link href={'/'} className="button bg-[#faff67] px-6 py-3 rounded-md relative inline-flex items-center justify-center h-11 transition-colors hover:text-[#000] hover:bg-[#fff] hover:border-[#faff67] text-n-8">
							Get Started
						</Link>
						<Link href={'/'} className="button bg-transparent border-2 px-6 py-3 rounded-md relative inline-flex items-center justify-center h-11 transition-all hover:text-[#000] hover:bg-[#faff67] hover:border-[#faff67] text-white">
                       		Hire Editors
                    	</Link>
					</div>

                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <Image
                                    src={robot}
                                    alt=""
                                    className="w-full scale-[1.7] mt-10 translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                />


							<ScrollParallax isAbsolutelyPositioned>
							<ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
								{heroIcons.map((icon, index) => (
								<li className="p-5" key={index}>
									<Image src={icon} width={24} height={25} alt={icon} />
								</li>
								))}
							</ul>
							</ScrollParallax>

							<ScrollParallax isAbsolutelyPositioned>
							<Notification
								className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
								title="Filterate Video Editors Amazing!"
							/>
							</ScrollParallax>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        {/* <Image
                            src={heroBackground}
                            alt=""
                            className="w-full"
                            width={1440}
                            height={1800}
                        /> */}
                    </div>
					{/* <BackgroundCircles parallaxRef={parrallaxRef}/> */}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
