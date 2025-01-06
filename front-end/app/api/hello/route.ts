import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    let message: Response = await fetch("http://localhost:8080/hello", {cache: "no-store"});
    return new Promise((resolve, reject) => {
        resolve(new NextResponse(message.body));
    });
}