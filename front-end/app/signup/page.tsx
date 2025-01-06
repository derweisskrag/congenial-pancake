import SignUpForm from "@/components/ui/SignUpFrom";

export default function Page() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div style={{ marginTop: '2rem', width: '100%', maxWidth: '75rem'}}>
                    <SignUpForm />
                </div>
        </main>
    );
}