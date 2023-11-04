import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadEntry from './pages/ReadEntry.jsx'
import CreateEntry from './pages/CreateEntry.jsx'
import EditEntry from './pages/EditEntry.jsx'
import EntryProfile from './pages/EntryProfile.jsx';
import { Link } from 'react-router-dom'
import { supabase } from './client.js'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const {data} = await supabase
        .from('Crewmates')
        .select()
        .order('created_at', { ascending: true })

      // set state of posts
      setPosts(data);
    }

    fetchPosts();
  }, [])
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadEntry data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditEntry data={posts} />
    },
    {
      path:"/crewmate/:id",
      element: <EntryProfile data={posts}/>
    },
    {
      path:"/new",
      element: <CreateEntry />
    }
  ]);

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Crewmates</h1>
          <Link to="/"><button className="headerBtn"> Explore Crewmates  </button></Link>
          <Link to="/new"><button className="headerBtn"> Submit New Crewmate </button></Link>
        </div>
          {element}
      </div>
    </>
  )
}

export default App
