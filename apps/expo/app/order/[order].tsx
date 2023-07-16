import { useSearchParams } from "expo-router";
import {OrderItem} from "../../screens/order-screens/order-item";
export default function Page() {
  const params = useSearchParams();
  return <OrderItem imageSource={require("../../assets/dish.jpg")} title={"Chiken"} quantity={1} price={"30"}  />;
}
