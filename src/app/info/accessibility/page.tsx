"use client";

import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    dropdownItems: [
      { label: "Who I Am", href: "/about" },
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "Details",
  },
];

const AccessibilityPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      <BlurFade delay={0.25}>
        <h1 className="text-4xl font-bold text-center mb-6">Accessibility Declaration</h1>
      </BlurFade>

      <BlurFade delay={0.35}>
        <p className="mb-8">
          I am dedicated to creating a website that is inclusive, accessible, and user-friendly for everyone. My goal is to
          ensure that individuals of all abilities, including those with disabilities or neurodivergent needs, can fully interact
          with and enjoy the content on this site. Accessibility is not just a feature—it is a core value that shapes how I design
          and develop every aspect of this portfolio.
        </p>
      </BlurFade>

      <hr className="my-8" />

      <BlurFade delay={0.45}>
        <h2 className="text-2xl font-semibold mb-4">My Accessibility Principles</h2>
      </BlurFade>

      <BlurFade delay={0.55}>
        <p className="mb-6">
          To create an inclusive web experience, I follow these principles:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={0.65}>
          <li><strong>Perceivable Content</strong>: Ensuring all information is presented in ways that can be recognized and understood by all users, including those using assistive technologies.</li>
        </BlurFade>
        <BlurFade delay={0.75}>
          <li><strong>Operable Functionality</strong>: Designing all interactive elements to be usable with a variety of input methods, such as keyboards or screen readers.</li>
        </BlurFade>
        <BlurFade delay={0.85}>
          <li><strong>Understandable Design</strong>: Keeping content clear and navigation intuitive so that users can easily interact with my website.</li>
        </BlurFade>
        <BlurFade delay={0.95}>
          <li><strong>Robust Compatibility</strong>: Building a website that works seamlessly across different browsers, devices, and assistive technologies.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={1.05}>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features on My Websites</h2>
      </BlurFade>

      <BlurFade delay={1.15}>
        <p className="mb-6">
          Here are some of the measures I have taken to make websites accessible:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={1.25}>
          <li><strong>Keyboard Navigation</strong>: Every page and interactive element can be accessed using a keyboard alone.</li>
        </BlurFade>
        <BlurFade delay={1.35}>
          <li><strong>Descriptive Alt Text</strong>: Images include meaningful alt text to ensure visual content is accessible to screen readers.</li>
        </BlurFade>
        <BlurFade delay={1.45}>
          <li><strong>High Contrast and Readable Fonts</strong>: I use accessible color combinations and legible font sizes to improve readability for users with visual impairments.</li>
        </BlurFade>
        <BlurFade delay={1.55}>
          <li><strong>Responsive Design</strong>: The website is fully responsive, providing an optimal experience across all devices, including desktops, tablets, and mobile phones.</li>
        </BlurFade>
        <BlurFade delay={1.65}>
          <li><strong>Focus Indicators</strong>: Clear focus indicators help users easily see where they are on the page when navigating via keyboard or assistive technology.</li>
        </BlurFade>
        <BlurFade delay={1.75}>
          <li><strong>Accessible Forms</strong>: Forms are labeled clearly and designed to be easy to fill out using various input methods.</li>
        </BlurFade>
        <BlurFade delay={1.85}>
          <li><strong>Minimized Cognitive Load</strong>: Simple layouts and consistent design patterns reduce distractions and make navigation easier for neurodivergent users.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={1.95}>
        <h2 className="text-2xl font-semibold mb-4">Continuous Testing and Improvement</h2>
      </BlurFade>

      <BlurFade delay={2.05}>
        <p className="mb-6">
          Accessibility is an ongoing journey, and I am committed to continually improving each and every website I develop by:
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={2.15}>
          <li><strong>Regular Audits</strong>: I use tools such as Lighthouse, WAVE, and Axe to identify accessibility issues and implement fixes promptly.</li>
        </BlurFade>
        <BlurFade delay={2.25}>
          <li><strong>Manual Testing</strong>: Testing with screen readers (e.g., NVDA, JAWS, VoiceOver) and keyboard-only navigation to ensure usability for all users.</li>
        </BlurFade>
        <BlurFade delay={2.35}>
          <li><strong>Staying Updated</strong>: Keeping abreast of the latest accessibility guidelines, including WCAG (Web Content Accessibility Guidelines), to ensure compliance and best practices.</li>
        </BlurFade>
        <BlurFade delay={2.45}>
          <li><strong>User Feedback</strong>: Actively seeking input from users to identify areas where accessibility can be improved.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={2.55}>
        <h2 className="text-2xl font-semibold mb-4">Support and Feedback</h2>
      </BlurFade>

      <BlurFade delay={2.65}>
        <p className="mb-6">
          I am committed to creating websites that are accessible to everyone, but I recognize that there is always room for growth. If you experience any barriers or have suggestions for how I can make any of my websites more accessible, please don’t hesitate to reach out.
        </p>
      </BlurFade>

      <ul className="list-disc pl-6">
        <BlurFade delay={2.75}>
          <li><strong>Email</strong>: [Your Email Address]</li>
        </BlurFade>
        <BlurFade delay={2.85}>
          <li><strong>Contact Form</strong>: [Link to Contact Form]</li>
        </BlurFade>
        <BlurFade delay={2.95}>
          <li><strong>Response Time</strong>: I will do my best to respond within [timeframe, e.g., 48 hours].</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={3.05}>
        <h2 className="text-2xl font-semibold mb-4">Commitment to an Inclusive Future</h2>
      </BlurFade>

      <BlurFade delay={3.15}>
        <p className="mb-6">
          By prioritizing accessibility, we’re not only adhering to standards but actively contributing to a more equitable internet. Thank you for supporting my mission to create an inclusive digital experience that empowers all users, regardless of ability.
        </p>
      </BlurFade>

      <BlurFade delay={3.25}>
        <p>
          Together, we can build a better web for everyone.
        </p>
      </BlurFade>
    </div>
  );
};

export default AccessibilityPage;
