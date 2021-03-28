
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import DataGrid from "./Components/DataGrid";
import Pagination from "./Components/Pagination";
import WizardForm from "./Components/WizardForm";


import React, { Component } from 'react';
class App extends Component {
  state = {  
    gridDatas:[],
    currentPage:1,
    dataPerPage:5,
    filterDatas:[],
    sortId:true,
    sortAsc:true
  }
  
  componentDidMount() {
    const getData=async()=>{
      const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({gridDatas:results.data,filterDatas:results.data})
    }
    getData();
  }
  searchGrid=(e)=>{
    const {gridDatas}=this.state
    const datas=gridDatas.filter(num=>num.title.startsWith(e.target.value))
    this.setState({filterDatas:datas})
    this.setState({
      currentPage:1
    })
  }

  dataSortId=()=>{
    const {sortId,filterDatas}=this.state
    const datas=filterDatas
   
    if(sortId){
      datas.sort((firstNumber, secondNumber)=>
       (secondNumber.id-firstNumber.id)
        
      );
    }
    else{
      datas.sort((firstNumber, secondNumber)=>(firstNumber.id-secondNumber.id));
    }
    
  
    this.setState({filterDatas:datas,sortId:!sortId})
  }

  dataSortAsc=()=>{
    const {filterDatas,sortAsc}=this.state
    const datas=filterDatas
    if(sortAsc)
    {
      datas.sort((firstLetter, secondLetter)=>
        (firstLetter.title>secondLetter.title?1:-1)
      );
    }
    else{
       datas.sort((firstLetter, secondLetter) =>
        (firstLetter.title>secondLetter.title?-1:1)
      );
    }
   
  
    this.setState({filterDatas:datas,sortAsc:!sortAsc})
  }
  render() { 
    const {currentPage,dataPerPage,filterDatas}=this.state
    const lastIndex=dataPerPage * currentPage
    const firstIndex=lastIndex-dataPerPage
    const currentGridDatas=filterDatas.slice(firstIndex,lastIndex)
    const nextPage=()=>{
      this.setState({
        currentPage:currentPage+1
      })
    }
    const prevPage=()=>{
      this.setState({
        currentPage:currentPage-1
      })
    }
    
    const paginate = pageNum => this.setState({ currentPage: pageNum });
    return ( 
      <>
     
      <DataGrid dataSortId={this.dataSortId} dataSortAsc={this.dataSortAsc} gridDatas={currentGridDatas}  searchGrid={this.searchGrid}></DataGrid>
      <Pagination currentPage={currentPage} paginate={paginate} dataPerPage={dataPerPage} totalData={filterDatas.length} prevPage={prevPage} nextPage={nextPage}></Pagination>    
      <WizardForm/>
      </>
     );
  }
}
 
export default App;


