// ProfileDisplay.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity,ImageSourcePropType } from 'react-native';

// Define the user profile type
export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  bio: string;
  profilePic: ImageSourcePropType;
  // Add any other relevant profile information here
}

export interface ProfileDisplayProps {
  userProfile: UserProfile;
  onEdit: (editedProfile: UserProfile) => void;
}

export const Profile: React.FC<ProfileDisplayProps> = ({ userProfile, onEdit }) => {
  const [editableUserProfile, setEditableUserProfile] = useState<UserProfile>(userProfile);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditPress = () => {
    if (isEditMode) {
      onEdit(editableUserProfile); // Save the edited profile
    }
    setIsEditMode(!isEditMode);
  };

  const handleChange = (field: keyof UserProfile, value: string) => {
    setEditableUserProfile((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleEditPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>{isEditMode ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <View style={styles.profilePicContainer}>
          <Image alt="imgage" source={ userProfile.profilePic } style={styles.profilePic} />
        </View>

        {isEditMode ? (
          <View>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              value={editableUserProfile.firstName}
              onChangeText={(value) => handleChange('firstName', value)}
            />

            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              value={editableUserProfile.lastName}
              onChangeText={(value) => handleChange('lastName', value)}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={editableUserProfile.email}
              onChangeText={(value) => handleChange('email', value)}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.input}
              value={String(editableUserProfile.age)}
              onChangeText={(value) => handleChange('age', value)}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Bio:</Text>
            <TextInput
              style={styles.input}
              value={editableUserProfile.bio}
              onChangeText={(value) => handleChange('bio', value)}
              multiline
            />
          </View>
        ) : (
          <View>
            <Text style={styles.label}>First Name: {userProfile.firstName}</Text>
            <Text style={styles.label}>Last Name: {userProfile.lastName}</Text>
            <Text style={styles.label}>Email: {userProfile.email}</Text>
            <Text style={styles.label}>Age: {userProfile.age}</Text>
            <Text style={styles.label}>Bio: {userProfile.bio}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  editButton: {
    marginBottom: 20,
  },
  editButtonText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
  },
  profilePicContainer: {
    marginBottom: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
