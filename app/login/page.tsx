import { LoginButton } from "@/components/buttons/auth-buttons";

export default function LoginPage() {
    return (
        <div className="p-8">
            <h1 className="text-xl mb-4">Sign in</h1>
            <LoginButton />
        </div>
    );
}
