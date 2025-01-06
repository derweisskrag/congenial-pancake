import BurgerCardList from "@/components/ui/BurgerCardList";
import MainContent from "@/components/ui/MainContent";

import {burgersData, mainBurgerSection} from "@/lib/BurgersData";


export default function Home() {
  return (
    <main>
      <MainContent {...mainBurgerSection}/>
      <div className="text-center text-[20px] lg:text-[100px] md:text-[50px] m-2 p-4">Наши Бургеры</div>
      <BurgerCardList burgers={burgersData}/>
    </main>
  );
}
