import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function DashboardSidebarHeader() {
    const session = await auth.api.getSession({headers: await headers()})
    return(
        <div className="bg-background flex justify-center items-center p-2 rounded-2xl">
            <p className="text-4xl font-semibold">
            {session?.user.name}
            </p>
        </div>
    )
}