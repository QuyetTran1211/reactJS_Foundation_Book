import axios from 'axios';
import React, { useState } from 'react'

function RestfulAxios() {
  const [repos, setRepos] = useState([]);
  const [status,setStatus] = useState();

  const getRepos = () => {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/facebook/repos'
    }).then(resp => setRepos(resp.data)).then(setStatus('fetched')).catch(error => console.error(error))
  }

  const logRepos = () => {
    console.log(repos);
  }

  return (
    <>        
          <button onClick={getRepos}>{status?"Fetched":"Fetch Repos"}</button>
          <button onClick={logRepos}>Log Repos</button>
  </>        
  )
}

export default RestfulAxios