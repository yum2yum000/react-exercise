import {render,fireEvent,screen,cleanup,waitFor} from '@testing-library/react'
import renderer from 'react-test-renderer'
import DataGrid from '../DataGrid'


afterEach(()=>{
    cleanup()
})

test("should render DataGrid",()=>{
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData}/>)
    const data=screen.getByTestId('data-list')
    expect(data.querySelectorAll('tr').length).toEqual(2)   
    
})

test("should have title and id",()=>{
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData}/>)
    const title=screen.getByTestId('title-2')
    const id=screen.getByTestId('id-2')
    expect(title).toHaveTextContent('nothing')
    expect(id).toHaveTextContent('2')
})

test("should render searchGrid",async () =>{
    const searchGrid=jest.fn()
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData} searchGrid={searchGrid}/>)
    const searchInput=screen.getByTestId('search')
    await waitFor(() =>fireEvent.change(searchInput,{target:{value:'test'}}))
    expect(searchInput.value).toBe('test')
    expect(searchGrid).toHaveBeenCalledTimes(1);
    ;
   
   
})

test("should not render searchGrid",async () =>{
    const searchGrid=jest.fn()
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData} searchGrid={searchGrid}/>)
    const searchInput=screen.getByTestId('search')
    await waitFor(() =>fireEvent.change(searchInput,{target:{value:''}}))
    expect(searchInput.value).toBe('')
    expect(searchGrid).not.toHaveBeenCalled();
    ;
})


test("should render dataSortId",()=>{
    const dataSortId=jest.fn()
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData} dataSortId={dataSortId}/>)
    const sortId=screen.getByTestId('sort-id')
    fireEvent.click(sortId)
    expect(dataSortId).toHaveBeenCalledTimes(1);
   
})

test("should render dataSortAsc",()=>{
    const dataSortAsc=jest.fn()
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    render(<DataGrid  gridDatas={gridData} dataSortAsc={dataSortAsc}/>)
    const sortAsc=screen.getByTestId('sort-asc')
    fireEvent.click(sortAsc)
    expect(dataSortAsc).toHaveBeenCalledTimes(1);
   
})

test("snap shot",()=>{
    const gridData=[{title:'nothing',id:'2'},{title:'thing',id:'3'}]
    const tree= renderer.create(<DataGrid  gridDatas={gridData} />).toJSON();
    expect(tree).toMatchSnapshot()
   
})