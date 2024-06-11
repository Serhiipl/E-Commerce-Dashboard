import Navbar from "@/components/Navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export default async function Dashboard({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeid: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeid,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
