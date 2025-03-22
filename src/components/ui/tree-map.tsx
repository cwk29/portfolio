'use client'

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Technology {
  name: string;
  category: string;
  icon: string;
  size: "sm" | "md" | "lg";
}

const technologies: Technology[] = [
  // Frameworks
  { name: "React", category: "Framework", icon: "/logos/react.svg", size: "lg" },
  { name: "Angular", category: "Framework", icon: "/logos/angular.svg", size: "md" },
  { name: "Next.js", category: "Framework", icon: "/logos/nextjs.svg", size: "lg" },
  { name: "Astro", category: "Framework", icon: "/logos/astro.svg", size: "sm" },
  
  // Runtimes
  { name: "Node.js", category: "Runtime", icon: "/logos/nodejs.svg", size: "lg" },
  { name: "Deno", category: "Runtime", icon: "/logos/deno.svg", size: "md" },
  
  // API Servers
  { name: "Express", category: "API", icon: "/logos/express.svg", size: "md" },
  { name: "Fastify", category: "API", icon: "/logos/fastify.svg", size: "sm" },
  { name: "Hono", category: "API", icon: "/logos/hono.svg", size: "sm" },
  
  // Data & Query
  { name: "TanStack Query", category: "Data", icon: "/logos/tanstack.svg", size: "md" },
  { name: "PostgreSQL", category: "Database", icon: "/logos/postgresql.svg", size: "lg" },
  { name: "MongoDB", category: "Database", icon: "/logos/mongodb.svg", size: "lg" },
  
  // Languages
  { name: "TypeScript", category: "Language", icon: "/logos/typescript.svg", size: "lg" },
  { name: "Python", category: "Language", icon: "/logos/python.svg", size: "md" },
  { name: "Java", category: "Language", icon: "/logos/java.svg", size: "md" },
  
  // Frontend
  { name: "HTML5", category: "Frontend", icon: "/logos/html5.svg", size: "md" },
  { name: "Tailwind", category: "CSS", icon: "/logos/tailwind.svg", size: "lg" },
  { name: "Bootstrap", category: "CSS", icon: "/logos/bootstrap.svg", size: "sm" },
  
  // Design
  { name: "Figma", category: "Design", icon: "/logos/figma.svg", size: "md" },
  { name: "Framer", category: "Design", icon: "/logos/framer.svg", size: "sm" },
  
  // Web3
  { name: "Ethereum", category: "Web3", icon: "/logos/ethereum.svg", size: "lg" },
  { name: "Solana", category: "Web3", icon: "/logos/solana.svg", size: "md" },
  { name: "Wagmi", category: "Web3", icon: "/logos/wagmi.svg", size: "sm" },
  { name: "Viem", category: "Web3", icon: "/logos/viem.svg", size: "sm" },
  { name: "Infura", category: "Web3", icon: "/logos/infura.svg", size: "md" },
  
  // DevOps
  { name: "Docker", category: "DevOps", icon: "/logos/docker.svg", size: "lg" },
  { name: "Kubernetes", category: "DevOps", icon: "/logos/kubernetes.svg", size: "lg" },
  { name: "AWS", category: "Cloud", icon: "/logos/aws.svg", size: "lg" },
  { name: "Vercel", category: "Cloud", icon: "/logos/vercel.svg", size: "md" },
  { name: "Vite", category: "Build", icon: "/logos/vite.svg", size: "md" },
];

export const TechTreeMap = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={cn(
              "relative group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors",
              {
                "col-span-2 row-span-2": tech.size === "lg",
                "col-span-1 row-span-2": tech.size === "md",
                "col-span-1 row-span-1": tech.size === "sm",
              }
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
            <div className="h-full flex flex-col items-center justify-center gap-2">
              <Image
                width={100}
                height={100}
                src={tech.icon}
                alt={`${tech.name} logo`}
                className={cn(
                  "transition-transform group-hover:scale-110",
                  {
                    "w-16 h-16": tech.size === "lg",
                    "w-12 h-12": tech.size === "md",
                    "w-8 h-8": tech.size === "sm",
                  }
                )}
              />
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {tech.name}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {tech.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
