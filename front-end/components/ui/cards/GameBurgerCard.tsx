import Image from "next/image"
import {ICard} from "@/interfaces/ICard";

const GameBurgerCard = ({ index, card, isFlipped, onClick }:{
    index: number;
    card: ICard;
    isFlipped: boolean;
    onClick: () => void;
}) => {
    return (
        <div
            className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center border ${isFlipped ? 'bg-white' : 'bg-gray-300'}`}
            onClick={onClick}
        >
            {isFlipped &&
                <Image src={card.imageSrc} alt={card.title} className="w-full h-full" width={600} height={400}/>}
        </div>
    );
};

export default GameBurgerCard;