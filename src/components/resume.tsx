const styles = {
    h1: "text-4xl font-bold",
    h2: "text-2xl font-bold",
    h3: "text-xl font-bold",
    p: "text-base italic text-neutral-600 dark:text-neutral-400",
    ul: "list-disc list-outside text-base space-y-2 my-4"
}

export default function Resume({ showSummary = false }: { showSummary?: boolean }) {
    return (
        <>
            {showSummary && (
                <>
                    <h1 className={styles.h1}>Cody Kuykendall</h1>
                    <section>
                        <h2 className={styles.h2}>Summary</h2>
                        <p className="text-base">Full-stack software engineer with 10 years of experience driving the complete SDLC across private and public sectors. Proven ability to design, develop, and deploy scalable applications and services using modern frameworks, DevOps practices, and cloud infrastructure. Passionate about blockchain, cryptocurrency, and web3. Entrepreneurial mindset and eager to transition from the government sector to contributing to the mainstream adoption of decentralized technologies. Exceptional people skills with a tireless work ethic.</p>
                    </section>
                </>
            )}

            <TechnicalSkills />

            <ProfessionalExperience />

            <Education />

        </>
    )
}

export function TechnicalSkills() {
    return (
        <section>
            <h2 className={styles.h2}>Technical Tools and Skills</h2>
            <article>
                <ul className={styles.ul}>
                    <li><strong>Languages & Frameworks:</strong> JS/TS Frameworks (Angular, React, Next.js, Astro), JS/TS Runtimes (Node.js, Deno), API Servers (Express, Fastify, Hono), TanStack Query, Python, Java, HTML5, CSS/SCSS (Bootstrap, Tailwind), Design (Figma, Framer), Web 3.0 (Solidity, Wagmi, Viem, Ethers)</li>
                    <li><strong>DevOps & Infrastructure:</strong> Docker, Kubernetes, AWS (Lambda, EC2, ECR, EKS, Route 53, S3), CI/CD, Vite, Linux, Shell Scripting</li>
                    <li><strong>Testing:</strong> Unit Testing (Vitest, Jest, React Testing Library), End-to-End Testing, Selenium, Karma, TDD</li>
                    <li><strong>Databases & APIs:</strong> SQL, NoSQL, REST, GraphQL, tRPC, (JSON-)RPC, WebSockets</li>
                    <li><strong>Tools & Methodologies:</strong> Git (GitLab/GitHub), Jira, Agile, SOA, Wireframing (Figma), VSCode</li>
                    <li><strong>Interests:</strong> Blockchain, Cryptocurrency, Decentralized Systems, AI Integration</li>
                </ul>
            </article>
        </section>
    )
}
export function ProfessionalExperience() {
    return (
        <section>
            <h2 className={styles.h2}>Professional Experience</h2>
            <article>
                <h3 className={styles.h3}>Software Engineer</h3>
                <p className={styles.p}>WorTech Corp, Columbia, MD | April 2019 – Present</p>
                <ul className={styles.ul}>
                    <li>Independently built and deployed the WorTech corporate website using MEAN Stack, integrating wireframes (in Figma), Docker, and AWS for scalability.</li>
                    <li>Co-developed an enterprise MSP microservices solution with Fastify, AMQP, and GraphQL APIs, managing critical services like data handling and authentication.</li>
                    <li>Spearheaded DevOps automation for a widely adopted open-source Software Defined Radio (SDR) platform, optimizing microservices deployment with Kubernetes and Terraform.</li>
                    <li>Designed and tested Angular front-end components for mission-critical systems, ensuring high reliability.</li>
                </ul>

                <h3 className={styles.h3}>Founder & CEO</h3>
                <p className={styles.p}>Juice Labz, LLC, Charlotte, NC | April 2018 – Present</p>
                <ul className={styles.ul}>
                    <li>Solo-built Streak Performance (a golf fitness platform with hundreds of users) using Next.js (as PWA), MongoDB (with Prisma ORM), OIDC and OAuth 2.0 A&A middleware, GraphQL and REST APIs, AWS Lambda for scalable logic, Stripe integration for subscriptions, and wallet integrations to accept crypto donations.</li>
                    <li>Deployed Directus CMS on Digital Ocean and implemented secure authentication (Express OIDC, OAuth 2.0).</li>
                    <li>Manage all aspects of product development and IT operations, reflecting the adaptability and initiative needed in fast-evolving crypto spaces.</li>
                    <li>Integrated PostHog for web analytics, A/B testing, and observability.</li>
                </ul>

                <h3 className={styles.h3}>Programmer/Analyst II</h3>
                <p className={styles.p}>Amyx, Inc/Allied Technologies & Consulting, LLC, Fort Detrick, MD | Dec 2018 – April 2019</p>
                <ul className={styles.ul}>
                    <li>Delivered full-stack .NET solutions for the U.S. Army, including an inventory management app with automated tracking.</li>
                </ul>

                <h3 className={styles.h3}>Full Stack Developer</h3>
                <p className={styles.p}>GDC IT Solutions, LLC, Chambersburg, PA/Hagerstown, MD | May 2015 – August 2018</p>
                <ul className={styles.ul}>
                    <li>Built a self-service AngularJS/ASP.NET app for loading data into Netezza Data Warehouse, enhancing accessibility.</li>
                    <li>Lead ETL developer and service owner for JLG Industries to process and optimize their financial queries, ensuring performance and reliable data for the analytics team.</li>
                </ul>

                <h3 className={styles.h3}>App Developer & Algorithms</h3>
                <p className={styles.p}>Shippensburg University, Shippensburg, PA | Jan 2014 – May 2015</p>
                <ul className={styles.ul}>
                    <li>Developed a custom iOS dice game in Swift, implementing strategic game logic.</li>
                    <li>Created a fantasy football app with a Flipboard-inspired UI, consolidating platforms into one interface.</li>
                </ul>
            </article>
        </section>
    )
}

export function Education() {
    return (
        <section>
            <h2 className={styles.h2}>Education</h2>
            <article>
                <h3 className={styles.h3}>Bachelor of Science in Software Engineering, Minor in Mathematics</h3>
                <p className={styles.p}>Shippensburg University, Shippensburg, PA | May 2015</p>
            </article>
        </section>
    )
}