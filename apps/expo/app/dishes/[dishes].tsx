import { useSearchParams } from "expo-router";
import {Dishes} from "../../screens/menu-screens/dishes";
export default function Page() {
  const params = useSearchParams();
  return <Dishes category={params?.dishes } />;
}
