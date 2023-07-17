import { useSearchParams } from "expo-router";
import {Profile, UserProfile} from "../../screens/user-screens/my-profile";
export default function Page() {
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    bio: 'Lorem ipsum dolor sit amet...',
    profilePic: require('../../assets/dish.jpg'),
    // Add any other relevant profile information here
  };
  const handleEditProfile = (editedProfile: UserProfile) => {
    // Here, you can save the edited profile data to your backend or state management system
    console.log('Edited Profile:', editedProfile);
  };
  return <Profile userProfile={userProfile} onEdit={handleEditProfile} />
}
