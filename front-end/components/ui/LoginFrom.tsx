import { Button, Form, Input } from "@nextui-org/react";

export default function LoginForm(){
    return (
        <Form className="flex flex-col gap-5" validationBehavior="native">
            <Input isRequired type="text" label="Почта" placeholder="Электронный аддрес" className="p-2 border border-gray-300 rounded-md" />
            <Input isRequired type="password" label="Пароль" placeholder="Пароль" className="p-2 border border-gray-300 rounded-md" />
            <Button className="p-2 bg-blue-500 text-white rounded-md">Войти</Button>
        </Form>
    );
}