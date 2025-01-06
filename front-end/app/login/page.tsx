import LoginForm from "@/components/ui/LoginFrom";
import SignUpForm from "@/components/ui/SignUpFrom";

export default function Page() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} className="bg-[#f5f5f5] border-[1px solid #e5e5e5] shadow-lg">  
            <div>
                <h1 className="mb-[2rem]">Вход</h1>
                <div className="border-[1px solidrgb(0, 0, 0)] p-[2rem] bg-white">
                    <LoginForm />
                </div>
            </div>
        </main>
    );
}