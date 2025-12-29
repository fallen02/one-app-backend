"use client"
import { LogoutSquare01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export function DashboardSidebarFooter() {
    const router = useRouter()
  return (
    <div className="flex justify-center  items-center p-1 rounded-2xl">
      <Button
        variant={"ghost"}
        className="w-full bg-background cursor-pointer dark:hover:bg-background rounded-full"
        onClick={async () =>
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                toast.success('Logged Out Successfully!')
                router.push("/login"); // redirect to login page
              },
            },
          })
        }
      >
        Logout
        <HugeiconsIcon icon={LogoutSquare01Icon} />
      </Button>
    </div>
  );
}
