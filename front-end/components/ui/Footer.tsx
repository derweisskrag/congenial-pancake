import Logo from "@/components/ui/Logo";
import { FaCopyright } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex items-center justify-around m-5 p-5 gap-5 bg-white shadow-md">
            <Logo />
            <h1>Все права защищены <FaCopyright /></h1>
        </footer>
    );
}