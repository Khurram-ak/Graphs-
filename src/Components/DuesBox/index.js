import "./index.css"
import MaterialTable from "material-table";
export default function DuesBox() {
        const data = [
          { name: "Imran", job: "designer", package: "xyz", purchaseDate: "11/1/2020",expiryDate:"22/2/2021",amount:"25000" },
          { name: "Ali Khan", job: "developer", package: "abc", purchaseDate: "15/1/2020",expiryDate:"2/7/2021",amount:"25574" },
          { name: "Sarfaraz", job: "editor", package: "xyz", purchaseDate: "11/1/2020",expiryDate:"22/2/2021",amount:"35000" },

        ];

        const columns = [
            {
              title: "Customer",
              field: "name",
            },
            {
              title: "Job ",
              field: "job",
            },
            {
              title: "Package",
              field: "package",
            },
            {
              title: "Purchase Date",
              field: "purchaseDate",
            },
            {
              title: "Expiry Date",
              field: "expiryDate",
            },
            {
              title: "Amount",
              field: "amount",
            },
          ];
    return <>
        <MaterialTable 
         title="Financial Details"
          data={data} 
          columns={columns} 
          options={{ search: false, paging: false, exportButton: false }}
          />
    </>
}

