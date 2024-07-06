import Button from "@/components/ui/Button";
import { db } from "@/lib/db";
import { Ghost } from "lucide-react";
import { Butcherman } from "next/font/google";

export default async function Home() {
  return <Button variant="ghost">Hello</Button>;
}
