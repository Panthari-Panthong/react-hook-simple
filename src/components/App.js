import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');
  // 

    return (
      <div className="ui container">
        <div>
          <button onClick={() => setResource("posts")} className="ui secondary button">Posts</button>
          <button onClick={() => setResource("todos")} className="ui button">Todos</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );
}

export default App;