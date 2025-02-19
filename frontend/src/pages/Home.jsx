import React, {useEffect, useState} from 'react'

const Home = () => {
const [data, setData] = useState()

  useEffect(() => {
      fetch("http://localhost/websites/backend/fetchdata.php")
      .then(res => {
        if(!res.ok){
          throw new Error('something when wrong');
        }
        return res.json;
      })
      .then(data => setData(data))
      .catch(error => console.error('Error in fetching data', error));
    },[]);
  return (
    <>
      <div>
        Home page:
        <h1>  A brief introduction and welcome message.</h1>
      </div>
      <table>

      </table>
    </>
  )
}
export default Home;