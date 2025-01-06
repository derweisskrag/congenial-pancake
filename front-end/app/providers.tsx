"use client";

// import the NextUIProvider
import {NextUIProvider} from "@nextui-org/system";
import {SessionProvider} from "next-auth/react";

export function Providers({ children } : {children: React.ReactNode}){
    return (
        <SessionProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </SessionProvider>
    );
}