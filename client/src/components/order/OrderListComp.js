import React from "react";
import MaterialTable from "material-table";
import OrderDetailsComp from "./OrderDetailsComp";

const OrderListComp = ({ columns, orderList }) => {
  return (
    <div>
      <MaterialTable
        title="Order History"
        columns={columns}
        data={orderList}
        detailPanel={rowData => {
          return <OrderDetailsComp cart={rowData.cartList} />;
        }}
        options={{ filtering: true }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </div>
  );
};

export default OrderListComp;
