"use client";

import { ClientTable } from "@/components/Client/ClientTable";
import { Card } from "@material-tailwind/react";
import React from "react";

const ClientPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start mx-auto gap-4 ">
      <Card
        className="w-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ClientTable />
      </Card>
    </div>
  );
};

export default ClientPage;
