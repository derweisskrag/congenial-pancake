"use client";

import React from "react";
import { Form } from "@nextui-org/form";
import { Input, Button, Select, SelectItem, Checkbox, Link } from "@nextui-org/react";
import { SignUp } from "@/services/UserService";


export default function SignUpForm() {
    const [password, setPassword] = React.useState("");
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    const getPasswordError = (value) => {
        if (value.length < 4) {
            return "Password must be 4 characters or more";
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return "Password needs at least 1 uppercase letter";
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return "Password needs at least 1 symbol";
        }

        return null;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Custom validation checks
        const newErrors = {};

        // Password validation
        const passwordError = getPasswordError(data.password);

        if (passwordError) {
            newErrors.password = passwordError;
        }

        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== "true") {
            setErrors({ terms: "Please accept the terms" });

            return;
        }

        // Clear errors and submit
        setErrors({});
        setSubmitted(data);

        SignUp(data.name as string, data.email as string, data.country as string, data.password as string).then((response) => {
            console.log(response);
        });
    };

    return (
        <Form
            className="grid gap-5 w-full lg:w-[35rem] mx-auto bg-white p-8 rounded-lg shadow-md h-full"
            validationBehavior="native"
            onSubmit={onSubmit}
            validationErrors={errors}
            onReset={() => setSubmitted(null)}
        >
            <h2 className="text-3xl font-bold mb-4 text-center">Регистрация</h2>
            <div className="grid lg:grid-cols-2 gap-10">
            <Input
                isRequired
                errorMessage="Пожалуйста, введите ваше имя"
                label="Имя"
                labelPlacement="outside"
                name="name"
                placeholder="Введите ваше имя"
                type="text"
                className="w-full"
            />
            <Input
                isRequired
                errorMessage="Пожалуйста, введите действительный адрес электронной почты"
                label="Электронная почта"
                labelPlacement="outside"
                name="email"
                placeholder="Введите вашу электронную почту"
                type="email"
                className="w-full"
            />
            <Select
                isRequired
                label="Страна"
                labelPlacement="outside"
                name="country"
                placeholder="Выберите страну"
            >
                <SelectItem key="ar" value="ar">
                Аргентина
                </SelectItem>
                <SelectItem key="us" value="us">
                Соединенные Штаты
                </SelectItem>
                <SelectItem key="ca" value="ca">
                Канада
                </SelectItem>
                <SelectItem key="uk" value="uk">
                Великобритания
                </SelectItem>
                <SelectItem key="au" value="au">
                Австралия
                </SelectItem>
                <SelectItem key="ee" value="ee">
                Эстония
                </SelectItem>
                <SelectItem key="fr" value="fr">
                Франция
                </SelectItem>
                <SelectItem key="de" value="de">
                Германия
                </SelectItem>
                <SelectItem key="jp" value="jp">
                Япония
                </SelectItem>
                <SelectItem key="cn" value="cn">
                Китай
                </SelectItem>
            </Select>
            <Input
                isRequired
                errorMessage="Пожалуйста, введите ваш пароль"
                label="Пароль"
                labelPlacement="outside"
                name="password"
                placeholder="Введите ваш пароль"
                type="password"
                className="w-full"
            />
            <Input
                isRequired
                errorMessage="Пожалуйста, повторите ваш пароль"
                label="Повторите пароль"
                labelPlacement="outside"
                name="repeatPassword"
                placeholder="Повторите ваш пароль"
                type="password"
                className="w-full"
            />
            <Checkbox
                isRequired
                classNames={{
                label: "text-small",
                }}
                isInvalid={!!errors.terms}
                name="terms"
                validationBehavior="aria"
                value="true"
                onValueChange={() => setErrors((prev) => ({ ...prev, terms: undefined }))}
            >
                I agree to the terms and conditions
            </Checkbox>
            <Button type="submit" variant="bordered" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Зарегистрироваться
            </Button>

            <div>Уже зарегстрированы? <Link href="/login">Войдите, пожалуйста!</Link></div>
            {submitted && (
                <div className="mt-4 text-sm text-gray-600">
                You submitted: <code>{JSON.stringify(submitted)}</code>
                </div>
            )}
            </div>
        </Form>
    );
}