import {Button} from "@nextui-org/button";
import { FaShoppingCart } from "react-icons/fa";
export default function OrderButton({ title }: {title: string}){
    return (
        <Button>
            {title}
            <FaShoppingCart />
        </Button>
    );
}