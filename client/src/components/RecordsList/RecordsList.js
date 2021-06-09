import { useState, useEffect, useMemo } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import debounce from "lodash.debounce";


function RecordsList(props) {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");



  useEffect(() => {
    async function getRecords() {
      try {
        const response = await axios.get("/api/records");
        setRecords(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getRecords();
  }, []);

  let filteredRecords = records;

  if (query !== "") {
    filteredRecords = records.filter((record) => {
      return record.last_name.toLowerCase().includes(query.toLowerCase()) || record.first_name.toLowerCase().includes(query.toLowerCase()) || record.city.toLowerCase().includes(query.toLowerCase()) || record.state.toLowerCase().includes(query.toLowerCase()) ;
    });
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 300);
  }, []);


  return (
    <div>
      <h2>
        Records
        <Link to="/records/new" className="btn btn-primary float-right">New Record</Link> 
      </h2>
      <hr/>
       <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Search records..."
      />
      {filteredRecords
        .sort((a,b)=> {
            return b.date > a.date ? 1: -1
        }).map((record) => (
        <div className="list-group list-group-horizontal" key={record._id}>
            <li className="list-group-item">{record.first_name}</li>
            <li className="list-group-item">{record.last_name}</li>
            <li className="list-group-item">{record.address1}</li>
            <li className="list-group-item">{record.address2}</li>
            <li className="list-group-item">{record.city}</li>
            <li className="list-group-item">{record.state}</li>
            <li className="list-group-item">{record.zip}</li>
            <li className="list-group-item">{record.country}</li>
            <li className="list-group-item">{moment(record.date).toString()}</li>
            <hr/>
        </div>
      ))}
      <div>{filteredRecords.length === 0 && query !== "" && "No matches found..."}</div> 
     </div> 
    </div>
  )
}

export default RecordsList;