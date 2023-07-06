import { useSearchParams } from "expo-router";
import { EditUser } from "../../screens/user-screens/edit-user";

export default function Page() {
  const params = useSearchParams();
  return <EditUser profileId={params.profileId } />;
}
