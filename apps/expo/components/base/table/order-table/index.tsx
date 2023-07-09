import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export const OrderTable = ({ orders }: any) => {
  const router = useRouter();
  const [tableData, setTableData] = useState<any>([[" ", " ", " ", " "]]);
  const navigation = useNavigation();

    console.log(orders)
  useEffect(() => {
    if (orders) {
      const order = orders.map((order: any) => [
        order?.id,
        order?.table_id,
        order?.waiter_id,
        order?.bill,
        order?.discount,
        order?.status,
      ]);
      setTableData(order);
    }
  }, [orders]);

  const handleOrder = (id: number) => {
    router.push(`/order/${id}`);
  };

  const tableHead = ["Order id", "Table number", "waiter name", "Bill", "Discount", "Status"];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData?.map((order: any) => (
          <Row
            onPress={() => handleOrder(order[0])}
            key={order.id}
            data={order}
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
