"use client";
import Section from "@/components/widgets/Section";
import "./page.css";
import OptionGroup from "./components/option_group";
import { AnswerContext } from "./context/AnswerContext";
import React from "react";
import { useContext } from "react";

const OnBoarding = () => {
  let clientQuestions = [
    "Slack or Discord account Username",
    "What time period would you like to work with your editor?",
    "What is your uploading frequency for your videos?",
    "What average duration of videos do you want edited?",
    "Do you have a preferred timeline or deadline for your videos?",
    "Can you provide an overview of the project(s) scope and objectives?",
    "Is there any editing software you prefer from your editors?",
    "Is there any editing style you prefer from your editors?",
    "Will you provide the clips for our editors?",
    "How many editors are you looking for?",
    "On a scale of 1-10 what level of experience are you looking for in your editors?",
    "What is your budget per video?",
    "Our payment method is through Paypal and single time transaction, do you accept this payment method?",
    "How would you prefer to communicate throughout the project (e.g., email, phone calls, video meetings)?",
    "What is your time zone?",
    "Is there anything else you'd like us to know about your project or expectations with our editors or our service?",
    "References linked here",
  ];

  const { pointer, changeCurrentPointer } = useContext(AnswerContext);

  const type = [];

  return (
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

        {pointer === 0 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[0]}
            defaultText="Write your username here."
          ></OptionGroup>
        )}
        {pointer === 1 && (
          <OptionGroup
            childrenArray={[
              "Long term (6+ months)",
              "Medium term (3 month)",
              "Short term (1 month)",
              "Permanent",
              "One Time Job",
            ]}
            other={true}
            question={clientQuestions[1]}
            defaultText="Other"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 2 && (
          <OptionGroup
            childrenArray={[
              "Daily",
              "Weekly",
              "Biweekly",
              "More than one video/short daily",
            ]}
            other={true}
            question={clientQuestions[2]}
            defaultText="Other"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 3 && (
          <OptionGroup
            childrenArray={[
              "Long Form Content: videos edited 5 minutes and above",
              "Short Form Content: videos edited 3 minutes and under",
              "Both",
            ]}
            other={true}
            question={clientQuestions[3]}
            defaultText="Other"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 4 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[4]}
            defaultText="Your answer"
          ></OptionGroup>
        )}
        {pointer === 5 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[5]}
            defaultText="Your answer"
          ></OptionGroup>
        )}
        {pointer === 6 && (
          <OptionGroup
            childrenArray={[
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Capcut",
              "DaVinci Resolve",
              "Filmora",
              "iMovie",
            ]}
            other={true}
            question={clientQuestions[6]}
            defaultText="Your answer"
          ></OptionGroup>
        )}
        {pointer === 7 && (
          <OptionGroup
            childrenArray={[
              "3D Animation",
              "Documentary",
              "Faceless (including AI automation)",
              "Game Play",
              "Motion Graphics",
              "Montage",
              "Special Effects",
              "Stop Motion",
              "VFX (Visual Effects)",
              "Vlog",
              "Voiceover",
            ]}
            other={true}
            question={clientQuestions[7]}
            defaultText="Your answer"
          ></OptionGroup>
        )}
        {pointer === 8 && (
          <OptionGroup
            childrenArray={["Yes", "No", "Depends"]}
            other={false}
            question={clientQuestions[8]}
            defaultText="Your answer"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 9 && (
          <OptionGroup
            childrenArray={["1", "2", "3", "4", "5"]}
            other={true}
            question={clientQuestions[9]}
            defaultText="Your answer"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 10 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[10]}
            defaultText="type an integer from 1-10"
          ></OptionGroup>
        )}
        {pointer === 11 && (
          <OptionGroup
            childrenArray={[
              "$10-$20",
              "$20-$50",
              "$50-$100",
              "$100-$200",
              "$200-$500",
              "$500+",
            ]}
            other={false}
            question={clientQuestions[11]}
            defaultText="type an integer from 1-10"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 12 && (
          <OptionGroup
            childrenArray={["Yes", "No"]}
            other={false}
            question={clientQuestions[12]}
            defaultText="type an integer from 1-10"
            free={false}
          ></OptionGroup>
        )}
        {pointer === 13 && (
          <OptionGroup
            childrenArray={[
              "Email",
              "Discord",
              "WhatsApp",
              "Zoom",
              "Slack",
              "Text Message",
            ]}
            other={true}
            question={clientQuestions[13]}
            defaultText="Other"
          ></OptionGroup>
        )}
        {pointer === 14 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[14]}
            defaultText="Other"
          ></OptionGroup>
        )}
        {pointer === 15 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[15]}
            defaultText="Your answer"
          ></OptionGroup>
        )}
        {pointer === 16 && (
          <OptionGroup
            childrenArray={[""]}
            other={true}
            question={clientQuestions[16]}
            defaultText="Your answer"
            submitButton={true}
          ></OptionGroup>
        )}
      </div>
    </Section>
  );
};

export default OnBoarding;
