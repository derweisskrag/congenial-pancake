import {IBurger} from "@/interfaces/IBurger";
import {burgersData} from "@/lib/BurgersData";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import Image from "next/image"
export default function Product({ params }: {params: {id: string}}){

    const targetProduct = burgersData
        .find(burger => burger.id === params.id);

    if(!targetProduct){
        return <div className={"text-center text-[50px] font-bold"}>Такого бургера у нас нет!</div>
    }

    return (
        <Card className={"py-4 max-w-[300px] text-center my-5 mx-auto"}>
            <CardHeader className={"flex flex-col items-center justify-center gap-4"}>
                <h1 className={"font-bold text-[25px]"}>{targetProduct.title}</h1>
                <p className={""}>
                    {targetProduct.description}
                </p>
            </CardHeader>
            <CardBody>
                <Image alt={""} width={250} height={250} src={targetProduct.imageSrc}></Image>
            </CardBody>
        </Card>
    );
}

export function generateStaticParams() {
    return burgersData.map(burger => {
        return {
            params: {
                id: burger.id.toString()
            }
        };
    });
}