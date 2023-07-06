import { useSearchParams } from "expo-router";
import Profile from "../../screens/user-screens/my-profile";
export default function Page() {
  const params = useSearchParams();
  return <Profile profileId={params.profileId } />;
}
