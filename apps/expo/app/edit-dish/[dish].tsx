import { useSearchParams } from "expo-router";
import { EditDish } from "../../screens/menu-screens/edit-dish";
export default function Page() {
  const params = useSearchParams();
  return <EditDish dishId={params?.dish } />;
}
