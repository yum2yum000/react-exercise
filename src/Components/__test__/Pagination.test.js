import {render,fireEvent,screen,cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import Pagination from '../Pagination'



afterEach(()=>{
    cleanup()
})

test("should render pagination",()=>{
    render(<Pagination  currentPage={1} totalData={9} dataPerPage={8} />)
    const todoElement=screen.getByTestId('page-1')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('1')
   
})

test("should not render pagination totalData",()=>{
    render(<Pagination  currentPage={1} totalData={0} dataPerPage={8} />)
   const todoElement=screen.getByTestId('page')
    expect(todoElement.innerHTML).toBeFalsy()
     
})

test("should not render pagination dataperPage",()=>{
    render(<Pagination  currentPage={1} totalData={10} dataPerPage={0} />)
    const todoElement=screen.getByTestId('page')
    expect(todoElement.innerHTML).toBeFalsy()
})

test("should render pageinate click",()=>{
    const pageinate = jest.fn();
    render(<Pagination  currentPage={1} totalData={9} dataPerPage={8}  paginate={pageinate}/>)
    const buttonElement=screen.getByTestId('currentPage-1')
   fireEvent.click(buttonElement)
    expect(pageinate).toHaveBeenCalledTimes(1);
})


test("not render next button",()=>{
   const {queryByTestId}= render(<Pagination  currentPage={1} totalData={6} dataPerPage={8}/>)
    expect(queryByTestId('next')).toBeFalsy()
  
})

test("next button if render",()=>{
    const nextPage = jest.fn();
    render(<Pagination  currentPage={1} totalData={19} dataPerPage={8} nextPage={nextPage}/>)
    const buttonElement=screen.getByTestId('next')
    fireEvent.click(buttonElement)
    expect(nextPage).toHaveBeenCalledTimes(1);
 })

 
test("not render prev button",()=>{
    const {queryByTestId}= render(<Pagination  currentPage={1} totalData={12} dataPerPage={8}/>)
     expect(queryByTestId('prev')).toBeFalsy()
   
 })
 
 test("not render prev button",()=>{
    const {queryByTestId}= render(<Pagination  currentPage={1} totalData={5} dataPerPage={8}/>)
     expect(queryByTestId('prev')).toBeFalsy()
   
 })

 test("prev button if render",()=>{
     const prevPage = jest.fn();
     render(<Pagination  currentPage={4} totalData={19} dataPerPage={8} prevPage={prevPage}/>)
     const buttonElement=screen.getByTestId('prev')
     fireEvent.click(buttonElement)
     expect(prevPage).toHaveBeenCalledTimes(1);
  })


  test("snap shot",()=>{
    const tree= renderer.create(<Pagination  currentPage={1} totalData={9} dataPerPage={8} />).toJSON();
    expect(tree).toMatchSnapshot()
   
})