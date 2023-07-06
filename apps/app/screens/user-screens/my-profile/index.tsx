import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import supabase from "../../../config/initSupabase";
import { Button, Icon, Text } from "@rneui/themed";
import { useRouter } from "expo-router";

export default function Profile({ profileId }: any) {
  const [user, setUser] = useState<any>();
  const router = useRouter();

  const handleEditUser = () => {
    router.push(`/edit-profile/${profileId}`);
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", profileId)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setUser(data);
        console.log(data);
      }
    };
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Name</Text>
        <Text style={styles.subtitle}>Email</Text>
        <Text style={styles.subtitle}>Job role</Text>
        <Text style={styles.subtitle}>Mobile #</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>
          {user?.first_name} {user?.last_name}
        </Text>
        <Text style={styles.subtitle}>{user?.email}</Text>
        <Text style={styles.subtitle}>{user?.job_role.toString()}</Text>
        <Text style={styles.subtitle}>{user?.cell_number}</Text>
      </View>
      <View>
        <Button onPress={handleEditUser} radius={"sm"} type="solid">
          Edit user
          <Icon name="edit" color="white" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 23,
    color: "#38434D",
  },
});
