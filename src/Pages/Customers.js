import React from "react";
import { Header } from "../Components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Selection,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../Data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
