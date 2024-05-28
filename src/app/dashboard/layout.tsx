import "@/app/globals.css";
import { SideNav } from "../side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive",
  description: "A file storing & sharing app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto pt-12">
      <div className="flex gap-8">
        <SideNav />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
