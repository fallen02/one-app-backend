import { LogoutSquare01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";

export function DashboardSidebarFooter(){
    return(
        <div className="bg-background flex justify-center items-center p-1 rounded-2xl">
            <Button variant={"ghost"} className="w-full hover:bg-transparent">
                Logout
                <HugeiconsIcon icon={LogoutSquare01Icon} />
            </Button>
        </div>
    )
}