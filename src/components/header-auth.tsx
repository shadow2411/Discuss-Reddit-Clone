"use client";
import Link from "next/link";
import * as actions from "@/actions";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SlLogout, SlLogin } from "react-icons/sl";

import { useSession } from "next-auth/react";
export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = <div>Loading...</div>;
  } else if (session.data?.user) {
    console.log(session);
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent className="p-0">
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
              <Button
                startContent={<SlLogout />}
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white w-full"
              >
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
          <Popover>
            <PopoverTrigger>
              <Button color="primary" className="hover:-translate-y-1 hover:duration-200">
                SignIn
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Card className="max-w-sm mx-auto p-6 bg-white ">
                <CardHeader className="text-center mb-4 flex flex-row space-y-2">
                  <h3 className="text-xl font-semibold text-align: center">
                    Sign In
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col space-y-4">
                  {/* GitHub Sign In Button */}
                  <form action={actions.signInWithGithub}>
                    <Button
                      className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white"
                      startContent={<FaGithub size="1.5em" />}
                      type="submit"
                    >
                      <span>Sign in with GitHub</span>
                    </Button>
                  </form>
                  {/* Google Sign In Button */}
                  <form action={actions.signInWithGoogle}>
                    <Button
                      className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white"
                      startContent={<FaGoogle size="1.5em" />}
                      type="submit"
                    >
                      <span>Sign in with Google</span>
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
