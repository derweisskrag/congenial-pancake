"use client";

import GameBurgerCard from "@/components/ui/cards/GameBurgerCard";
import {burgersData} from "@/lib/BurgersData";
import {useState, useEffect} from "react";
import {shuffleArray, selectBurgers} from "@/utils/shuffle";
import {Button} from "@nextui-org/button";
import {ICard} from "@/interfaces/ICard";

const GRID_SIZE = 4;
export default function MemoryGame(){
    const [cards, setCards] = useState<ICard[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState<number>(0);

    useEffect(() => {
        const selectedBurgers = selectBurgers(GRID_SIZE, burgersData);
        const shuffledCards = shuffleArray([...selectedBurgers, ...selectedBurgers]);
        setCards(shuffledCards);
    }, []);


    const handleClick = (index: number) => {
        if(
            flippedCards.length === 2 ||
            flippedCards.includes(index) ||
            matchedCards.includes(index)
        ){
            return;
        }

        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if(newFlippedCards.length === 2){
            setMoves(moves + 1);
            const [firstIndex, secondIndex] = newFlippedCards;
            if(cards[firstIndex].id === cards[secondIndex].id){
                setMatchedCards([...matchedCards, firstIndex, secondIndex]);
            }

            setTimeout(() => setFlippedCards([]), 500);
        }
    }


    const resetGame = () => {
        const selectedBurgers = selectBurgers(GRID_SIZE, burgersData);
        const shuffledCards = [...selectedBurgers, ...selectedBurgers];
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    }

    return (
        <main className={"m-5 p-5 min-h-screen flex flex-col items-center"}>
            <div className={"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"}>
                {
                    cards.map((card, index) => (
                        <GameBurgerCard
                            key={index}
                            index={index}
                            card={card}
                            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                            onClick={() => handleClick(index)}
                        />
                    ))
                }
            </div>
            {
                matchedCards.length === cards.length && (
                    <div className={"mt-4"}>
                        <p>Игра окончена! Вы завершили игру за {moves} ходов!</p>
                        <Button
                            className={"mt-2 p-2 bg-blue-500 text-white rounded"}
                            onClick={resetGame}
                        >
                            Начать заново!
                        </Button>
                    </div>
                )
            }
        </main>
    );
}