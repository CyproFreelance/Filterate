'use client'
import React, { useContext } from "react";
import Section from "@/components/widgets/Section";
// import OptionGroup from "@/components/onboardingPage/OptionGroup";
// import { AnswerContext } from "@/components/onboardingPage/AnswerContext";

const OnboardingPage = () => {
    // const roleQuestion = ["Are you a Client or Freelancer?"];
    // const { pointer, changeCurrentPointer } = useContext(AnswerContext);

    // const type = [];
    return (
        <>
            <Section
                className={`pt-[12rem] -mt-[5.25rem] overflow-hidden`}
                crossesOffset={`lg:translate-y-[5.25rem]`}
                customPaddings
                id="onboarding"
                >
            <div className="container-fluid-main mt-10 mx-auto w-fit text-center">
                <div className="onboarding-brand">
                    <h1 className="block  text-3xl font-bold">FILTRATE</h1>
                </div>
            

                {/* {pointer === 0 && (
                    <OptionGroup
                    childrenArray={[
                        "Client",
                        "Freelancer"
                    ]}
                    other={false}
                    question={roleQuestion[1]}
                    defaultText="Other"
                    free={false}
                    ></OptionGroup>
                )} */}
                </div>
            </Section>
        </>
    );
};

export default OnboardingPage;
