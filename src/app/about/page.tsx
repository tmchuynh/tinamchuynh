"use client";

import BlurFade from "@/components/ui/blur-fade";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl text-justify mx-auto p-6">

      <BlurFade delay={0.25} inView>
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
      </BlurFade>

      <BlurFade delay={0.45} inView>
        <p className="text-lg">
          Hi, I’m <strong>Tina Huynh</strong>, a passionate <strong>Full-Stack Web Developer</strong> with a
          relentless curiosity for all things tech and design. My journey into web development began in 2020 as a
          self-taught front-end enthusiast, driven by a desire to create intuitive, engaging, and impactful digital
          experiences. In 2023, I expanded my expertise by completing a <strong>Full-Stack Web Development Bootcamp</strong>,
          diving deep into the intricacies of back-end development and solidifying my skills across the entire stack.
        </p>
      </BlurFade>


      <BlurFade delay={0.55} inView>
        <h2 className="text-2xl font-semibold mt-8 mb-4">What I Bring to the Table</h2>
      </BlurFade>

      <BlurFade delay={0.55} inView>
        <p className="text-lg">
          I thrive at the intersection of <strong>functionality and creativity</strong>, blending technical proficiency with
          innovative design to build websites that are as effective as they are elegant. Whether it’s crafting seamless user
          interfaces or engineering robust server-side solutions, I approach every project with a user-first mindset,
          ensuring that:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Clean, User-Centered Design</strong>: Websites should not just look good but also feel intuitive to navigate.</li>
          <li><strong>Accessibility for All</strong>: I’m deeply committed to making the web a more inclusive space, particularly
            for neurodivergent users and those with disabilities.</li>
          <li><strong>Continuous Learning</strong>: Web development is an ever-evolving field, and I’m eager to stay ahead of
            the curve by exploring emerging technologies and best practices.</li>
        </ul>
      </BlurFade>

      <BlurFade delay={0.65} inView>
        <h2 className="text-2xl font-semibold mt-8 mb-4">My Vision</h2>
      </BlurFade>
      <BlurFade delay={0.65} inView>
        <p className="text-lg">
          The web is a powerful platform that connects people, ideas, and solutions. I aim to contribute by building digital
          experiences that are:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Visually Stunning</strong>: Balancing simplicity and creativity to make designs memorable.</li>
          <li><strong>Effortlessly Navigable</strong>: Prioritizing usability and accessibility for all users, regardless of ability or neurodiversity.</li>
          <li><strong>Technically Sound</strong>: Ensuring scalable, efficient, and maintainable code across the stack.</li>
        </ul>
      </BlurFade>


      <BlurFade delay={0.75} inView>
        <h2 className="text-2xl font-semibold mt-8 mb-4">A Lifelong Learner</h2>
      </BlurFade>

      <BlurFade delay={0.75} inView>
        <p className="text-lg">
          I’ve always been someone who picks up skills quickly and eagerly dives into new challenges. Beyond my expertise
          in full-stack development, I’m actively expanding my knowledge in areas like:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Web Design & UX/UI</strong>: Enhancing the aesthetics and functionality of digital experiences.</li>
          <li><strong>Web Accessibility</strong>: Advocating for a more inclusive web that caters to all users.</li>
          <li><strong>Emerging Tech Trends</strong>: Staying updated on cutting-edge tools and frameworks to deliver the best solutions.</li>
        </ul>
      </BlurFade>
      <BlurFade delay={0.85} inView>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Let’s Build Something Amazing</h2>
      </BlurFade>
      <BlurFade delay={0.85} inView>
        <p className="text-lg">
          I’m looking to connect with <strong>forward-thinking employers and collaborators</strong> who share my passion for
          innovation and excellence in web development. If you’re seeking someone who’s not only technical but also highly
          adaptable, creative, and driven by a desire to learn, I’d love to hear from you!
        </p>
      </BlurFade>

    </div>
  );
};

export default AboutPage;
