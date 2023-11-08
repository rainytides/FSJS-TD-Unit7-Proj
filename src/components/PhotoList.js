import Photo from './Photo';
import NotFound from './NotFound';

// Renders a list of photos, a loading indicator, or a not found message.
const PhotoList = ({ photos, loading }) => {
  if (loading) return <h3>Loading...</h3>;

  if (!photos.length) return <NotFound />;

  return (
    <ul>
      {photos.map(photo => (
        <Photo key={photo.id} data={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
