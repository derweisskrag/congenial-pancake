"use server";

export async function SignUp(
    name: string,
    email: string,
    country: string,
    password: string
): Promise<string> {
    const url = "http://localhost:8080/create-user";

    const requestBody = new URLSearchParams();
    requestBody.append("name", name);
    requestBody.append("email", email);
    requestBody.append("country", country);
    requestBody.append("password", password);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: requestBody.toString(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        return result; // e.g., "User created successfully!"
    } catch (error) {
        console.error("Error during SignUp:", error);
        throw error;
    }
}