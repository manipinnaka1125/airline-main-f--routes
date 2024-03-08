import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1); // Corrected the typo in useState

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setPosts({}); 
      });
  }, [buttonId, id]); 

  const handleClick = () => {
    setButtonId(id);
  };

  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button> {/* Added a button to trigger the API call */}
      <div>
        <h3>{posts.title}</h3>
        {/* Display other post details as needed */}
      </div>
    </div>
  );
};

export default DataFetch;
