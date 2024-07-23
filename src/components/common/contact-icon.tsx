import { cn } from "@/lib/utils";
import React from "react";

interface ContactIconProps {
  icon?: React.ReactNode;
  label?: string | React.ReactNode;
  value?: string | React.ReactNode;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, label, value }) => {
  return (
    <div className={cn("flex flex-col items-center space-y-2")}>
      <div className={cn("p-10 bg-gray-200 rounded-full")}>{icon}</div>
      <h4 className="font-semibold">{label}</h4>
      <h1 className="font-medium">{value}</h1>
    </div>
  );
};

export default ContactIcon;
