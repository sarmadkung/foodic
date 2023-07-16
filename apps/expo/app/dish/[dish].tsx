import { useSearchParams } from "expo-router";
import {AboutDish} from "../../screens/menu-screens/dish-detail";
export default function Page() {
  const params = useSearchParams();
  return <AboutDish/>;
}
