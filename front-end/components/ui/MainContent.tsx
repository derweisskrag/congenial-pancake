"use client";

import {MainContentProps} from "@/interfaces/MainContentProps";
import Label from "@/components/ui/Label";
import MainBurger from "@/components/ui/MainBurger";

// import the font for title
import {gilroy, merriWeather} from "@/lib/font";
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation"
export default function MainContent({ label, title, description, buttonContent }: MainContentProps) {
    const router = useRouter();
    return (
        <div className="m-4 p-2 flex flex-col items-center justify-center lg:flex-row md:mx-16 md:flex-row">
            <div className="max-w-[250px] lg:max-w-[608px] flex flex-col items-center justify-center gap-4">
                {/* Arrange navigation and main burger */}
                <Label label={label} />
                <h1 className={`${merriWeather.className} text-[40px] lg:text-[120px] md:text-[75px] line-clamp-3 leading-tight`}>{title}</h1>
                <p className={`${gilroy.className}`}>{description}</p>
                <Button
                    onClick={() => router.push("/products")}
                    className={"self-start text-2xl bg-[#D3320F]"}>
                    {buttonContent}
                </Button>
            </div>
            <MainBurger />

        </div>
    );
}