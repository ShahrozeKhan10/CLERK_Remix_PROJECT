import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import {  LoaderFunctionArgs, redirect } from "@remix-run/node";

export async function loader(args: LoaderFunctionArgs){
  const {userId} = await getAuth(args)
  console.log({userId})
  if(!userId) return redirect("/sign-in")
  return { data: {userId}}
}

export default function DashboardRoute() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4">
        <h1>Dashboard Route - private </h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
