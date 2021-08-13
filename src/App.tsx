import React, {useMemo} from "react";
import Table from "./components/Table";
import DATA from "./data/data.json";
import { COLUMNS } from "./data/columns";

const App = () => {

  const columns:any = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  return (
    <div style={{ marginLeft: "25px", marginRight: "25px" }}>
       <Table columns={columns} data={data} updateMyData={() => console.log('i guess...')}/>
    </div>
  );
};

export default App;