import './App.css';
import { useGetAllDataQuery ,useGetDataByIdQuery, 
  useDeleteDataMutation , useCreateDataMutation} from './services/crudapi';
 

function App() {
  // const responseData = useGetAllDataQuery();
  // const responseData = useGetDataByIdQuery(7);
  // const [deletedData , data] = useDeleteDataMutation();

  const [ createData , data] = useCreateDataMutation();
  const item = {
    title: 'I am New Data',
    body: 'I am new data Body',
    userId: 1,
  }
  // console.log(responseData)
  console.log("Data Created Succesfully")
  console.log(data)
  
  // console.log(responseData.data);
  // if(responseData.isLoading) return <h2> Loading ...</h2>
  
    return (
      <div className="App">
        <h1>Create Data</h1>
         {
          // responseData.data.map( (post,i) =>
          // <div key={i}>
          // <h1> {post.id}  {post.title}</h1>
          // <p> {post.body}</p>
          // <hr/>
          // </div>     
          // )
         }
          <div >
          {/* <h1> {responseData.data.id}  {responseData.data.title}</h1>
          <p> {responseData.data.body}</p>
          <hr/> */}
          </div>
        {/* <button onClick={()=>{deletedData(4)}}>Delete Data</button> */}
        <button onClick={()=>{createData(item)}}>Create Data</button>
      </div>
    );
  

}

export default App;
