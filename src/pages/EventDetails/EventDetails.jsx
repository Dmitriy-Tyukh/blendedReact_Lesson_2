import { useFetchEvent } from 'hooks/UseFetchEvent';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventDetails = () => {
  const event = useFetchEvent();
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <button type="button" onClick={() => navigate(location?.state?.from ?? "/")}>
            Go back
          </button>
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
          <img src={event.images[0].url} alt={event.name} width="300" />
        </div>
      )}
    </>
  );
};
