"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="relative flex w-full mx-auto  justify-between ">
      {/* <h1>Welcome, {session.user.name}</h1> */}
      <Button
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
        Sign Out
      </Button>
      <Button
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
        Sign Out
      </Button>
    </div>
  );
}
