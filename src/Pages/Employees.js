import React from "react";
import { Header } from "../Components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../Data/dummy";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
