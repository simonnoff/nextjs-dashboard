import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}