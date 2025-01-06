import {Input} from "@nextui-org/input";
import {gilroy} from "@/lib/font";

export default function SearchBar({ searchValue, onSearchChange }: {
    searchValue: string;
    onSearchChange: (value: string) => void;
}){
    return (
        <div className={"w-[500px] m-5 p-5 flex flex-col gap-3"}>
            <h1 className={`${gilroy.className} font-bold text-xl`}>Найдите Бургер по названию</h1>
            <Input
                placeholder="Введите название бургера"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}