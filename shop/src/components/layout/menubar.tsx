import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Menubar() {
  return (
    <NavigationMenu className="font-semibold text-2xl mx-40 my-6 px-8 py-4 shadow-md">
      <NavigationMenuList>
        <NavigationMenuItem>
          Home
        </NavigationMenuItem>
        <Button>ти кнопка</Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
