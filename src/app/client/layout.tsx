"use client";

import { DefaultNavbar } from "@/components/Navbar/DefaultNavbar";
import { SideBar } from "@/components/Sidebar/SideBar";
import { ClientProvider } from "@/contexts/ClientProvider";
import { useUserContext } from "@/contexts/UserProvider";
import { Spinner } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ClientLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex min-h-screen py-4 pl-4 bg-blue-gray-50 w-full">
      <SideBar />
      <main className="flex-1 ml-[20rem] px-16 gap-8">
        <div className="mb-8 w-full">
          <DefaultNavbar />
        </div>
        <ClientProvider>{children}</ClientProvider>
      </main>
    </div>
  );
}
