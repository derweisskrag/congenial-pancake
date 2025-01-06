import {Card, CardHeader, CardBody} from "@nextui-org/card";
import Image from "next/image";

import {AboutData} from "@/lib/AboutData";
import AboutCard from "@/components/ui/cards/AboutCard";

export default function About(){
    return (
        <main className={"m-3 p-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                AboutData.map((about, key) => (
                    <AboutCard key={key} {...about} />
                ))
            }
        </main>
    );
}