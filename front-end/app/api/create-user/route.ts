export async function POST(name: string, email: string, country: string, password: string): Promise<Response> {
    let response: Response = await fetch("http://localhost:8080/create-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            country: country,
            password: password,
        }),
    });
    return response;
}