"use client";

import BurgerCardList from "@/components/ui/BurgerCardList";
import SearchBar from "@/components/ui/SearchBar";
import {useState, useEffect} from "react";
import {burgersData} from "@/lib/BurgersData";
import {IBurger} from "@/interfaces/IBurger";

export default function Products(){
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredBurgers, setFilteredBurgers] = useState<IBurger[]>([]);


    useEffect(() => {
        setFilteredBurgers(
            burgersData.filter(burger =>
                burger.title.toLowerCase().includes(searchValue.toLowerCase()))
        )
    }, [searchValue]);

    return (
        <div>
            <div>
                <h1 className={"text-center my-5 mx-auto font-bold text-2xl"}>Все бургеры доступные у нас</h1>
                <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />
            </div>
            <BurgerCardList burgers={filteredBurgers} />
        </div>
    );
}

