import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import sortSvg from'../assets/sort.svg';
class DataGrid extends Component {
    state = {  }
    render() { 
        const {gridDatas,searchGrid,dataSortId,dataSortAsc}=this.props
        return (  
            <>
           
 <Table striped bordered hover size="sm">
 
 <thead>
    <tr>
      <th><img  alt="de" data-testid="sort-id" className="cursor-pointer" onClick={dataSortId} src={sortSvg} width="20"/></th>
      <th>title   <img  alt="st" data-testid="sort-asc" className="cursor-pointer" onClick={dataSortAsc} src={sortSvg} width="20"/>
      <input data-testid="search" onChange={searchGrid}></input></th>
      
      
    </tr>
  </thead>
  <tbody data-testid="data-list">
     {
         
         gridDatas.map(gridData=>{
             return(
                 <tr key={gridData.id}>
                     <td data-testid={`id-${gridData.id}`}>{gridData.id}</td>
                     <td data-testid={`title-${gridData.id}`}>{gridData.title}</td>
                 </tr>
             )
         })
     }
     </tbody>
 
</Table>
            </>
        );
    }
}
 
export default DataGrid;