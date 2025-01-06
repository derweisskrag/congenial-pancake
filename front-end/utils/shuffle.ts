import {IBurger} from "@/interfaces/IBurger";

export function shuffleArray(array: any){
    return array.sort(() => Math.random() - 0.5)
}

export function selectBurgers(gridSize: number, burgersData: IBurger[]){
    const numPairs = (gridSize * gridSize) / 2;
    return burgersData.slice(0, numPairs).map((burger, index) => ({
        ...burger, index
    }));
}