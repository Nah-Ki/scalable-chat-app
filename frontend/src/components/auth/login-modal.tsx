"use client";


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Login</DialogTitle>
        </DialogHeader>
        <Button variant="outline">
          <Image src="/images/google.png" className="mr-4" width={25} height={25} alt="google_log"></Image>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
