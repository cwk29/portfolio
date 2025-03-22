import Resume from "@/components/resume"
import { ActionButtons } from "@/components/ui/action-button"

export default function Profile() {
    return (
        <div className="container mx-auto max-w-screen-md p-8 pb-20 sm:p-20">

            <ActionButtons />

            <main className="flex flex-col gap-8 row-start-2 items-center">
                <Resume showSummary />
            </main>
        </div>
    )
}