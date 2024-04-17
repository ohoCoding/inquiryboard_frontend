import { MainHeader, Table } from "../components";
import { useEffect, useState } from "react";

const Index = () => {
     const [data, setData] = useState({ data: [] });
    
     useEffect(() => {

     })
    return(
        <div>
            <MainHeader/>
            <Table data={data}/>
        </div>
    )
}
export default Index;