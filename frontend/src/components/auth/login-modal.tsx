"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl mx-auto">Login</DialogTitle>
        </DialogHeader>
        <Button variant="outline" className="mx-auto">
          <Image src="/images/google.png" className="mr-4" width={25} height={25} alt="google_log"></Image>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
