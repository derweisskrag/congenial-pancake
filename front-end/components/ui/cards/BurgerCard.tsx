"use client";

/* This BurgerCard component is reused within the application  */

import {Image} from "@nextui-org/image";
import OrderButton from "@/components/ui/OrderButton";

import {IBurger} from "@/interfaces/IBurger";
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation"
/**
 *
 * @constructor
 */

export default function BurgerCard(burger: IBurger){

    const router = useRouter();

    return (
        <div className={"p-5 flex flex-col items-center justify-center gap-4 border-8 border-black-800 shadow-lg shadow-grey-500"}>
            {/* Header content */}
            <Image
                src={burger.imageSrc}
                alt={"Burger image"}
            >
            </Image>
            <h1 className={"text-xl font-bold"}>{burger.title}</h1>
            <p className={"line-clamp-2"}>{burger.description}</p>
            {/* Below goes the footer */}
            <div className={"self-start flex flex-col items-center justify-center text-lg"}>
                <h1>{`${burger.price} ${burger.currency}`}</h1>
                <h2>{burger.size}</h2>
            </div>
            <div className={"self-end"}>
                <OrderButton title={"Заказать"}/>
            </div>
            <div className={"self-end"}>
                <Button onClick={() => router.push(`/products/${burger.id}`)}>
                    Подробнее
                </Button>
            </div>
        </div>
    );
}