import React, { Component } from 'react';

class Pagination extends Component {
    state = {  }
   

    render() { 
        const { dataPerPage,totalData,nextPage, prevPage, paginate,currentPage  } = this.props;
        const pageNumbers = [];
        let prevShow=''
        let nextShow =''
        const dataCount=dataPerPage!==0?Math.ceil(totalData / dataPerPage):0
       
        for (let i = 1; i <=  dataCount; i++) {
            pageNumbers.push(i);
        }
        if(currentPage>1 && dataPerPage<totalData){
            prevShow= <li className="page-item">
            <span data-testid='prev' className="page-link" onClick={() => prevPage()}>Previous</span>
        </li>
        }
        
        if(currentPage<dataCount){
            nextShow= <li className="page-item" >
            <span data-testid='next' className="page-link" onClick={() => nextPage()}>Next</span>
        </li>
        }
        return ( 
            <>
             <nav>
                
                <ul data-testid="page" className="pagination justify-content-center">
                   {
                     prevShow
                   }

                   {
                       pageNumbers.filter(num=>num<currentPage+2 && num>currentPage-2).map(num=>{
                           return(
                              
                            <li data-testid={`page-${num}`} className="page-item" key={num}>
                            <span data-testid={`currentPage-${num}`} onClick={() => paginate(num)}   className={currentPage===num?'page-current':'page-link'}>{num}</span>
                        </li>
                           )
                       })
                   }


                  
                   {
                       nextShow
                   }
                </ul>
            </nav>
            </>
         );
    }
}
 
export default Pagination;