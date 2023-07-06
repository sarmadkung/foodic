import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Button, Icon } from "@rneui/base";

export const OrderItemTable = ({ orders }: any) => {
  const router = useRouter();
  const [tableData, setTableData] = useState<any>([[" ", " ", " ", " "]]);
  const navigation = useNavigation();

  useEffect(() => {
    if (orders) {
      const order = orders.map((order: any) => [
        order?.id,
        order?.menu_item,
        order?.quantity,
        order?.modification,
          order?.order_id,
          <Button  radius={"sm"} type="solid">
          <Icon name="edit" color="white" />
          </Button>,
          <Button  radius={"sm"} type="solid">
          <Icon name="delete" color="white" />
        </Button>
      ]);
      setTableData(order);
    }
  }, [orders]);

  const handleOrder = (id: any) => {
    router.push(`/order/${id}`);
  };

  const tableHead = ["id", "Food items", "Quantity", "Modification", "Order_id", "Edit Order", "Delete Order"];

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
