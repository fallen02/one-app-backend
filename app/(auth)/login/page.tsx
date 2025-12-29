"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  User02Icon,
  LockPasswordIcon,
  ViewIcon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true)
    const {data, error} = await authClient.signIn.email({
        email,
        password,
        // callbackURL: "/dashboard",
        fetchOptions: {
          onSuccess: (ctx) => {
            toast.success(`Logged in successfully!! ${ctx.data.user.name}`)
            router.push('/dashboard')
            setLoading(false)
          },
          onError: (ctx) => {
            toast.error(`Sorry, ${ctx.error.message}`)
            setLoading(false)
          },
          
        }
         
    })
    //  setLoading(false)

  }

  return (
    <div className="relative flex justify-center items-center flex-col  h-dvh">
      <div className="w-full h-px bg-border"></div>

      <div className="relative max-w-100 w-full p-4 border-border border-x">
        <div className="absolute size-2 bg-gray-600 -top-1 -left-1 rotate-45 rounded-[2px]"></div>
        <div className="absolute size-2 bg-gray-600 -top-1 -right-1 rotate-45 rounded-[2px]"></div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl mb-5 font-sans font-semibold tracking-wide">
            Welcome, <span className="text-primary">Admin</span>
          </h1>
          <InputGroup>
            <InputGroupInput
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroupAddon>
              <HugeiconsIcon icon={User02Icon} size={24} color="currentColor" />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput
              placeholder="Enter password"
              type={passwordVisibility ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroupAddon>
              <HugeiconsIcon
                icon={LockPasswordIcon}
                size={24}
                color="currentColor"
              />
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="cursor-pointer"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              <HugeiconsIcon
                icon={passwordVisibility ? ViewOffSlashIcon : ViewIcon}
                size={24}
                color="currentColor"
              />
            </InputGroupAddon>
          </InputGroup>

          <Button
            variant="outline"
            className="mt-5"
            disabled={loading ? true : false}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
        <div className="absolute size-2 bg-gray-600 -bottom-1 -left-1 rotate-45 rounded-[2px]"></div>
        <div className="absolute size-2 bg-gray-600 -bottom-1 -right-1 rotate-45 rounded-[2px]"></div>
      </div>
      <div className="w-full h-px bg-border"></div>
    </div>
  );
}
