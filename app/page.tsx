import {Button} from "@/components/ui/button";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export default async function InputGroupDemo() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return(
            <div>Not authenticated</div>
        )
    }
  return (
      <div className="relative flex max-w-[90%] mx-auto  justify-between mt-5">
        <h1>Welcome, {session.user.name}</h1>
          <Button>Sign Out</Button>
      </div>
  );
}
