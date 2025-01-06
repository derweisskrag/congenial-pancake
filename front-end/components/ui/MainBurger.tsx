import Image from "next/image"

/**
 *
 * @constructor
 */


export default function MainBurger(){
    return (
        <div className={" p-2 m-5 lg:basis-2/4"}>
            {/* Main burger image */}
            <Image
                src={"/images/main_burger.png"}
                alt={"Main Burger"}
                fetchPriority={"high"}
                height={500}
                width={1200}
                />
        </div>
    );
}