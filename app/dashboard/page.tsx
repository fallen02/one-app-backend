"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="relative flex w-full mx-auto  justify-between ">
      Movies
    </div>
  );
}
