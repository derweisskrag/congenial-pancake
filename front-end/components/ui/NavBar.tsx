"use client"


import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "@/components/ui/Logo";
import { Link } from "@nextui-org/link";
import { useState} from "react";
import {usePathname} from "next/navigation";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const handleMenuTogle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Navbar isBordered className={""}>
            <NavbarBrand className={" flex items-center justify-center"}>
                <Logo />
            </NavbarBrand>
            <NavbarContent className={"hidden md:flex"}>
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/">Главная</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/about"}>
                    <Link href="/about">Почему у нас</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/products"}>
                    <Link href="/products">Меню Бургеров</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/order"}>
                    <Link href="/order">Оформление заказа</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/MemoryGame"}>
                    <Link href="/MemoryGame">Запомни Бургер - Игра</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/signup"}>
                    <Link href="/signup">Регистрация</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/login"}>
                    <Link href="/login">Войти</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenuToggle onClick={handleMenuTogle} className={"md:hidden"} />
            { isMenuOpen && (
                <NavbarMenu className={"md:hidden"}>
                    <NavbarMenuItem isActive={pathname === "/"}>
                        <Link href="/">Главная</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem isActive={pathname === "/about"}>
                        <Link href="/about">Почему у нас</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem isActive={pathname === "/products"}>
                        <Link href="/products">Меню Бургеров</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem isActive={pathname === "/order"}>
                        <Link href="/order">Оформление заказа</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem isActive={pathname === "/MemoryGame"}>
                        <Link href={"/MemoryGame"}>Запомни Бургер - Игра</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            )}
        </Navbar>
    );
}
