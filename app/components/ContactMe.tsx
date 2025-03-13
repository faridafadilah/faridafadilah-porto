import { useState } from "react";
"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Label } from "~/lib/label";
import { Input } from "~/lib/input";
import { cn } from "~/lib/utils";

export function ContactMe() {
  const [activeTab, setActiveTab] = useState("social");

  return (
    <div className="max-w-2xl mx-auto mt-5 mb-5">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 text-lg font-semibold ${
            activeTab === "social" ? "border-b-2 border-yellow-500" : ""
          }`}
          onClick={() => setActiveTab("social")}
        >
          Contact Me
        </button>
        <button
          className={`px-4 py-2 mx-2 text-lg font-semibold ${
            activeTab === "email" ? "border-b-2 border-yellow-500" : ""
          }`}
          onClick={() => setActiveTab("email")}
        >
          Email Me
        </button>
      </div>
      {activeTab === "social" ? <SocialMedia /> : <Email />}
    </div>
  );
};

export function Email() {
  const recipientEmail = "faridafadilah42807@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = (document.getElementById("message") as HTMLInputElement)?.value;

    const subMessage = "We’re Hiring – and You’re a Perfect Fit!";
    if (!message) {
      alert("Please fill in the message field.");
      return;
    }

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${subMessage}&body=${encodeURIComponent(message)}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Hire Me?
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Looking for a dedicated and results-driven professional? Let’s connect and create something amazing together!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Recipient Email</Label>
          <Input
            id="email"
            type="email"
            defaultValue={recipientEmail}
            disabled
            className="cursor-not-allowed bg-gray-200 dark:bg-gray-700"
            aria-disabled="true"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your Message</Label>
          <Input id="message" placeholder="Your message" type="text" />
        </LabelInputContainer>

        <div className="flex justify-center">
          <button
            className="relative group/btn flex items-center justify-center px-6 py-2 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Send via Gmail &rarr;
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}


  export function SocialMedia() {
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          My Social Media
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Open to exciting opportunities! Let’s collaborate and make things happen.
        </p>
  
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
  
        <div className="flex flex-col space-y-4">
          <a 
            href="https://github.com/faridafadilah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </a>
          <a 
            href="https://www.linkedin.com/in/farida-fadilah-57552b20b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Linkedin
            </span>
            <BottomGradient />
          </a>
          <a 
            href="https://www.instagram.com/rida_dilah?igsh=NjNpYXlxZHlqODFx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Instagram
            </span>
            <BottomGradient />
          </a>
          <a 
            href="https://wa.me/628815877610" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              WhatsApp
            </span>
            <BottomGradient />
          </a>
        </div>
      </div>
    );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    </>
  );
};


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
