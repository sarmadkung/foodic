import { useSearchParams } from "expo-router";
import OrderDetail from "../../screens/order-screens/order-detail";
export default function Page() {
  const params = useSearchParams();
  return <OrderDetail order={params?.order } />;
}
