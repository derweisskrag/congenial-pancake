/**
 * Logo component
 * @constructor
 */

import Image from "next/image"

export default function Logo(){
    return (
        <div>
            {/* TODO: Figure our why Logo.png does not work */}
            <Image
                src={"/icons/vercel.svg"}
                alt={"Logo"}
                width={100}
                height={75}
            />
        </div>
    );
}