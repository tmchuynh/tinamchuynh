"use client";

import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaCheckDouble, FaMicrophone, FaPalette, FaUniversalAccess, FaVolumeHigh } from "react-icons/fa6";
import { IoNavigateCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Info",
    dropdownItems: [
      { label: "Who I Am", href: "/info/about" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "Accessibility Declaration",
  },
];

const AccessibilityPage = () => {
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      <BlurFade delay={0.25}>
        <h1 className="text-4xl font-bold text-center mb-6">
          Accessibility Declaration
        </h1>
      </BlurFade>

      <BlurFade delay={0.35}>
        <p className="mb-8">
          My commitment is to building websites that are inclusive, accessible,
          and user-friendly for everyone. I strive to ensure that individuals of
          all abilities, including those with disabilities or neurodivergent
          needs, can seamlessly engage with and enjoy the content on this
          platform. Accessibility is more than a feature—it's a foundational
          principle that guides every aspect of my design and development
          process.
        </p>
      </BlurFade>

      <hr className="my-8" />

      <BlurFade delay={0.45}>
        <h2 className="text-2xl font-semibold mb-4">
          Core Accessibility Principles
        </h2>
      </BlurFade>

      <BlurFade delay={0.55}>
        <p className="mb-6">
          I adhere to the following principles to ensure an inclusive and
          accessible web experience:
        </p>
      </BlurFade>

      <ul className="list-none">
        <li className="mb-2">
          <BlurFade delay={0.65} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Perceivable Content</strong>: Presenting all information
              in formats that are easily recognized and understood by everyone,
              including those relying on assistive tools.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={0.75} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Operable Functionality</strong>: Ensuring interactive
              elements can be navigated and used via multiple input methods,
              like keyboards and screen readers.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={0.85} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Understandable Design</strong>: Keeping the website
              content clear and intuitive, allowing users to easily navigate and
              interact with all features.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={0.95} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Robust Compatibility</strong>: Developing a site that
              functions consistently across various browsers, devices, and
              assistive technologies.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.05} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Equitable Use</strong>: Designing features that provide
              the same level of functionality and access to all users,
              regardless of ability or technology.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.15} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Error Prevention and Recovery</strong>: Providing clear
              instructions and error messages to guide users in completing
              actions successfully.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.25} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Consistent Navigation</strong>: Ensuring consistent menus,
              layouts, and design patterns to make navigation predictable and
              straightforward.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.35} className="inline-flex">
            <FaUniversalAccess
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Flexibility and Customization</strong>: Allowing users to
              adjust settings such as font size, contrast, or language to meet
              their individual needs.
            </p>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={1.45}>
        <h2 className="text-2xl font-semibold mb-4">
          Accessibility Features Implemented
        </h2>
      </BlurFade>

      <BlurFade delay={1.55}>
        <p className="mb-6">
          These are some of the key steps I’ve taken to ensure my websites are
          accessible to all users:
        </p>
      </BlurFade>

      <ul className="list-none">
        <li className="mb-2">
          <BlurFade delay={1.65} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Keyboard-Friendly Navigation</strong>: All pages and
              interactive elements are fully operable using only a keyboard.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.75} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Descriptive Alt Text</strong>: Meaningful alt text is
              added to images, ensuring screen readers can effectively convey
              visual content.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.85} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>High Contrast and Legible Fonts</strong>: Accessible color
              schemes and readable font sizes enhance visibility for users with
              visual impairments.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={1.95} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Responsive Design</strong>: Websites adapt seamlessly to
              various devices, offering an optimal experience on desktops,
              tablets, and smartphones.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={2.05} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Focus Indicators</strong>: Clearly visible focus
              indicators help users track their navigation, whether using a
              keyboard or assistive tools.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={2.15} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Accessible Forms</strong>: Form fields are well-labeled
              and designed for smooth interaction across multiple input methods.
            </p>
          </BlurFade>
        </li>
        <li className="mb-2">
          <BlurFade delay={2.25} className="inline-flex">
            <FaCheckDouble
              className="mr-2 h-6 w-6 text-tertiary"
              aria-hidden="true"
            />
            <p>
              <strong>Reduced Cognitive Load</strong>: Simplified layouts and
              consistent design patterns ensure a smoother experience for
              neurodivergent users.
            </p>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={2.35}>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Tools and Testing</h2>
      </BlurFade>

      <BlurFade delay={2.45}>
        <p className="mb-6">
          To ensure compliance with accessibility standards and provide an inclusive experience for all users, I leverage a range of tools that help identify and address potential accessibility issues:
        </p>
      </BlurFade>

      <ul className="list-none grid md:grid-cols-2">
        <li className="mb-3">
          <BlurFade delay={2.66}>
            <strong>General Accessibility</strong>:
            These tools help identify potential accessibility issues and ensure compliance with accessibility standards like WCAG.
            <ul className="list-none pt-2 flex flex-col">
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://wave.webaim.org/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WAVE Accessibility Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.qualibooth.com/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  QualiBooth
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://achecks.org/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  AChecker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.accessibilitychecker.org/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Accessibility Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://webaim.org/resources/contrastchecker/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WebAIM Contrast Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://accessibility.huit.harvard.edu/testing", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Harvard Accessibility Testing
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.deque.com/axe/devtools/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Axe DevTools
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://wave.webaim.org/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WAVE Accessibility Tool
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaCheckCircle
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.paciellogroup.com/tools/arc-toolkit/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  ARC Toolkit
                </Button>
              </li>
            </ul>
          </BlurFade>
        </li>

        <li className="mb-3">
          <BlurFade delay={2.88}>
            <strong>Color Contrast</strong>:
            Ensuring sufficient contrast between text and background is crucial for readability, especially for users with visual impairments such as color blindness.
            <ul className="list-none pt-2 flex flex-col">
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://webaim.org/resources/contrastchecker/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WebAIM Contrast Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://color-contrast-checker.deque.com/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Color Palette Contrast Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://coolors.co/contrast-checker", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Coolors Contrast Checker
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.accessibilitychecker.org/color-contrast-checker/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  AccessibilityChecker Color Contrast
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://contrast-ratio.com/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Contrast Ratio Tool
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaPalette
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://accessibility.huit.harvard.edu/color", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Harvard Color Contrast Testing
                </Button>
              </li>
            </ul>
          </BlurFade>
        </li>

        <li className="mb-3">
          <BlurFade delay={2.77}>
            <strong>Keyboard Navigation</strong>:
            Keyboard navigation is essential for users with motor disabilities. These tools simulate keyboard-only navigation to ensure that all interactive elements can be accessed through keyboard input.
            <ul className="list-none pt-2 flex flex-col">
              <li className="inline-flex mb-1 items-center">
                <IoNavigateCircleSharp
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.w3.org/WAI/WCAG21/Techniques/general/G158.html", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  W3C WCAG Keyboard Testing Guide
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <IoNavigateCircleSharp
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://webaim.org/articles/keyboard/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WebAIM Keyboard Navigation Checklist
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <IoNavigateCircleSharp
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Mozilla Keyboard Navigation Resources
                </Button>
              </li>
            </ul>
          </BlurFade>
        </li>

        <li className="mb-3">
          <BlurFade delay={2.55}>
            <strong>Screen Readers</strong>:
            These tools simulate how screen readers interact with content, helping to ensure the site is fully accessible to visually impaired users.
            <ul className="list-none pt-2 flex flex-col">
              <li className="inline-flex mb-1 items-center">
                <FaVolumeHigh
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.nvaccess.org/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  NVDA (NonVisual Desktop Access)
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaVolumeHigh
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://chrome.google.com/webstore/detail/screen-reader/njacgdhfojhldggakfbkbfcnmfaaaaon", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  ChromeVox (Chrome Extension)
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaVolumeHigh
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.freedomscientific.com/Products/Blindness/JAWS", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  JAWS (Job Access With Speech)
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaVolumeHigh
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.apple.com/voiceover/info/guide.html", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  VoiceOver (macOS and iOS)
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaVolumeHigh
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.screenreader.net/our-screen-reader-test", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  WebAIM Screen Reader Simulator
                </Button>
              </li>
            </ul>
          </BlurFade>
        </li>

        <li>
          <BlurFade delay={2.99}>
            <strong>Speech Recognition</strong>:
            These tools and resources help ensure that your website or application is compatible with voice commands and accessible for users relying on speech recognition technology.
            <ul className="list-none pt-2 flex flex-col">
              <li className="inline-flex mb-1 items-center">
                <FaMicrophone
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.nuance.com/dragon.html", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Dragon NaturallySpeaking
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaMicrophone
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://webspeechapi.github.io/", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Web Speech API (Browser Support)
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaMicrophone
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.google.com/intl/en/chrome/browser/voice.html", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Google Voice Typing
                </Button>
              </li>
              <li className="inline-flex mb-1 items-center">
                <FaMicrophone
                  className="h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <Button
                  variant="link"
                  onClick={() => window.open( "https://www.windowscentral.com/how-use-speech-recognition-windows-10", "_blank" )}
                  className="text-muted hover:text-foreground"
                >
                  Windows Speech Recognition
                </Button>
              </li>
            </ul>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={3.0}>
        <h2 className="text-2xl font-semibold mb-4">Support and Feedback</h2>
      </BlurFade>

      <BlurFade delay={3.0}>
        <p className="mb-6">
          I am committed to creating websites that are accessible to everyone,
          but I recognize that there is always room for growth. If you
          experience any barriers or have suggestions for how I can make any of
          my websites more accessible, please don’t hesitate to reach out.
        </p>
      </BlurFade>

      <ul className="list-none flex flex-col">
        <li>
          <BlurFade delay={3.11}>
            <strong>Email</strong>:
            <Button
              variant={"link"}
              onClick={() => window.open( "mailto:tinamchuynh@gmail.com" )}
              className="pl-2"
            >
              tinamchuynh@gmail.com
            </Button>
          </BlurFade>
        </li>
        <li>
          <BlurFade delay={3.33}>
            <strong>Response Time</strong>: I will do my best to respond within
            [timeframe, e.g., 48 hours].
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      <BlurFade delay={3.44}>
        <h2 className="text-2xl font-semibold mb-4">
          Commitment to an Inclusive Future
        </h2>
      </BlurFade>

      <BlurFade delay={3.44}>
        <p className="mb-6">
          By prioritizing accessibility, we’re not only adhering to standards
          but actively contributing to a more equitable internet. Thank you for
          supporting my mission to create an inclusive digital experience that
          empowers all users, regardless of ability.
        </p>
      </BlurFade>

      <BlurFade delay={3.44}>
        <p>Together, we can build a better web for everyone.</p>
      </BlurFade>
    </div>
  );
};

export default AccessibilityPage;
