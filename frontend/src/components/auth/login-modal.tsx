"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
<<<<<<< HEAD
=======
import { signIn } from "next-auth/react";
>>>>>>> 6774ddd2ef6061bdefa514a108842bcaa67046da
import Image from "next/image";
import { Button } from "../ui/button";

export default function LoginModal() {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl mx-auto">Login</DialogTitle>
        </DialogHeader>
<<<<<<< HEAD
        <Button variant="outline" className="mx-auto">
=======
        <Button variant="outline" onClick={handleLogin}>
>>>>>>> 6774ddd2ef6061bdefa514a108842bcaa67046da
          <Image src="/images/google.png" className="mr-4" width={25} height={25} alt="google_log"></Image>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
