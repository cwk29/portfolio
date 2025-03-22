import Image from "next/image";
import Providers from "./providers";
import { ConnectWallet } from "@/components/ui/connect-wallet";
import { ContactMe } from "@/components/ui/contact-me";


export default function Home() {
  return (
    <Providers>
      <div className="container mx-auto max-w-screen-md min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-4 row-start-2 items-center pb-10">
          <Image
            className="rounded-full w-40 h-40"
            src="/me.jpg"
            alt="Cody Kuykendall"
            height={100}
            width={100}
            priority
          />
          <h1 className="text-4xl font-bold">Hello, I am Cody 👋</h1>

          <p className="text-base w-full text-justify">
            I&apos;ve been a full-stack software engineer for the past decade, driving the complete SDLC across both the private and public sectors.
            I&apos;ve designed, developed, tested, and deployed scalable applications and services using modern frameworks, DevOps practices, and cloud infrastructure.
            My passion is in crafting quality software and services. I believe in writing software that is easy to understand, maintain, and extend.
            I&apos;m a big proponent of the SOLID and DRY (Don&apos;t Repeat Yourself) principles - and following the <span className="italic">&apos;boyscout rule&apos;</span> of leaving the codebase better than you found it.
            I&apos;m particularly exited about the future of blockchain, cryptocurrency, and web3.
            I have an entrepreneurial mindset and am eager to transition from the government sector to contributing to the mainstream adoption of decentralized technologies.
            My strongest attribute is my ability to understand and work with people. Coupled with a tireless work ethic, I can become a valuable asset to any team on day one.
          </p>

          <ContactMe />

          <ConnectWallet />

        </main>

      </div>
    </Providers>
  );
}
