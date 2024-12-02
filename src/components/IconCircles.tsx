import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "java",
  "react",
  "tailwindcss",
  "html5",
  "css3",
  "mysql",
  "express",
  "flask",
  "mongodb",
  "springboot",
  "linux",
  "nextdotjs",
  "bootstrap",
  "amazonaws",
  "django",
  "docker",
  "git",
  "bulma",
  "gitkraken",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconClouds() {
  return (
    <div className="flex size-full max-w-xl items-center mx-auto h-[4rem]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
