import { LoaderFunctionArgs, redirect, MetaFunction } from "@remix-run/node";

import Hero from "~/components/custom/Hero";

import { getAuth } from "@clerk/remix/ssr.server";

export async function loader(args: LoaderFunctionArgs){
  const {userId} = await getAuth(args)
  
  if(!userId) return redirect("/sign-in")
  return { data: {userId}}
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RootRoute() {
  return <Hero />;
}
