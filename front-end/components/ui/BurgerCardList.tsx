/**
 * This is the list of BurgerCard components
 */


// import the card
import BurgerCard from "@/components/ui/cards/BurgerCard";
import {IBurger} from "@/interfaces/IBurger";

export default function BurgerCardList({burgers}: {burgers: IBurger[]}){

    if(!burgers){
        return <div className={"text-center my-5 mx-auto fond-bold text-xl"}>У нас нет бургеров в наличие сейчас!</div>
    }


    return (
        <div className={"m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
            {
                burgers.map((burger, key) => (
                    <BurgerCard key={burger.id} {...burger}/>
                ))
            }
        </div>
    );
}