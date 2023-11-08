import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import PageNotFound from './components/PageNotFound';

// Define the topics array
const topics = ['rivers', 'trees', 'flowers'];

function App() {
  // Function to create Route for each topic
  const getRoute = topic => 
    <Route key={topic} path={`/${topic}`} element={<Gallery topic={topic} />} />;

  return (
    <div className="container">
      {/* Search form component */}
      <SearchForm />
      
      {/* Navigation component with topics passed as props */}
      <Nav topics={topics} />
      
      {/* Route configuration */}
      <Routes>
        {/* Index route for recent gallery items */}
        <Route index element={<Gallery isIndex={true} />} />
        
        {/* Routes for each topic */}
        {topics.map(getRoute)}
        
        {/* Route for search functionality */}
        <Route path="search/:tag" element={<Gallery />} />
        
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;