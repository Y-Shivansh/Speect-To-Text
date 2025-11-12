import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl text-primary font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-secondary">Oops! The page you're looking for doesn't exist.</p>
      
      <Link
        to="/"
        className="text-xl px-6 py-2 rounded-lg hover:opacity-90 bg-dark text-primary bg-light transition duration-150"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
