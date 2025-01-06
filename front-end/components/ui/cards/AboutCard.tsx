import {IAbout} from "@/interfaces/IAbout";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import Image from "next/image";

export default function AboutCard({ title, description, imageSrc}: IAbout){
    return (
        <Card>
            <CardHeader className={"flex flex-col items-center justify-center"}>
                <h1 className={"font-bold text-lg"}>{title}</h1>
                <p className={"self-start"}>{description}</p>
            </CardHeader>
            <CardBody className={"flex items-center justify-center"}>
                <Image alt={"image"} width={300} height={300} src={imageSrc}></Image>
            </CardBody>
        </Card>
    );
}