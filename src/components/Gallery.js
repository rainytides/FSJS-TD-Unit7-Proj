import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Import components and API key
import PhotoList from './PhotoList';
import Pagination from './Pagination';
import apiKey from './config';

// Gallery component to display photos based on the topic or tag
const Gallery = ({ topic, isIndex = false }) => {
  // State for photos, loading status, current page, and total pages
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Get the tag from URL parameters or use the provided topic
  const { tag = topic } = useParams();

  // Fetch photos from the Flickr API when currentPage or tag changes
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      // Determine the Flickr API method based on whether it's the index page
      const method = isIndex ? 'getRecent' : `search&tags=${tag}`;
      // Construct the full URL with the current page and make the API request
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.${method}&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&page=${currentPage}`;
      
      try {
        const response = await axios.get(url);
        // Update state with the fetched photos and total pages
        setPhotos(response.data.photos.photo);
        setTotalPages(response.data.photos.pages);
      } catch (err) {
        console.error('Error fetching photos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, tag, isIndex]); // apiKey removed from dependency array

  // Render the gallery UI
  return (
    <div className="photo-container">
      {/* Show the tag or "Recent" if no tag is provided */}
      <h2>Gallery of {tag ? `${tag.charAt(0).toUpperCase()}${tag.slice(1)}` : 'Images'}</h2>

      {/* Show a loading message or the list of photos */}
      {loading ? <p>Loading...</p> : <PhotoList photos={photos} />}

      {/* Show pagination controls if there is more than one page */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Gallery;
