import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full bg-sidebar p-2">
        <div className="min-h-full w-full bg-background rounded-lg p-2">
        <SidebarTrigger />
        {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
