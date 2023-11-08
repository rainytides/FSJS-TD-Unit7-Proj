import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Function to handle going back to the previous page
  const handleGoBack = () => navigate(-1);

  // Function to handle navigation to the home page
  const handleGoHome = () => navigate('/');

  return (
    <div className="container-not-found">
      <h1>Oops! We can't find that page.</h1>
      <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <img src={`${process.env.PUBLIC_URL}/404-Error.jpg`} alt="Page Not Found" className="image-404-Error"/>
      <div className="actions">
        <button onClick={handleGoBack}>Take Me Back</button>
        <button onClick={handleGoHome}>Return to Home</button>
      </div>
    </div>
  );
}

export default NotFound;
