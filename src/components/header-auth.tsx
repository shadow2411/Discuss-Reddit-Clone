"use client";
import Link from "next/link";
import * as actions from "@/actions";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = <div>Loading...</div>;
  } else if (session.data?.user) {
    console.log(session);
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <Card className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center p-4 space-x-4">
              <Avatar
                src={session.data.user.image || ""}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="text-lg font-semibold">
                  {session.data.user.name}
                </div>
                <div className="text-sm text-gray-500">
                  {session.data.user.email}
                </div>
              </div>
            </div>
            <form action={actions.signOut} className="p-4 pt-0">
              <Button type="submit" className="color-primary w-full">
                Sign Out
              </Button>
            </form>
          </Card>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              SignIn
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              SignUp
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
