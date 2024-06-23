"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
}
export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isLoading={pending}
      className="w-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
    >
      {children}
    </Button>
  );
}
