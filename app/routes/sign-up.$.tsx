import { SignUp } from "@clerk/remix";

export default function SignUpRoute(){
    return (
        <div className="flex items-center justify-center  h-[calc(100vh-80px)]">
            <SignUp />
        </div>
    )
}