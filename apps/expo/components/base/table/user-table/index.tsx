import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export const UserTable = ({ users }: any) => {
  const router = useRouter();
  const [tableData, setTableData] = useState<any>([[" ", " ", " ", " "]]);
  const navigation = useNavigation();

  useEffect(() => {
    if (users) {
      const user = users.map((user:any) => [
        user?.id,
        user?.first_name,
        user?.last_name,
        user?.email,
        user?.job_role.toString(),
      ]);
      setTableData(user);
    }
  }, [users]);

  const handleProfile = (id: any) => {
    router.push(`/profile/${id}`);
  };

  const tableHead = ["id", "First name", "Last name", "Email", "Role"];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData?.map((user: any) => (
          <Row
            onPress={() => handleProfile(user[0])}
            key={user.id}
            data={user}
            style={[styles.list, { backgroundColor: "#DFF5F2" }]}
            textStyle={styles.listText}
          />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  list: { height: 30, backgroundColor: "#f0f0f0" },
  listText: { textAlign: "right", marginRight: 6 },
});
