import { useFetchEvent } from 'hooks/UseFetchEvent';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventSubPage = () => {
    const event = useFetchEvent();
    const location = useLocation()

    return (
      <>
        {event && (
          <>
            <p>{event.name}</p>
            <img src={event.images[0].url} alt={event.name} width="300" />
            <p>
              <Link to='details' state={location.state}>More details</Link>
            </p>
          </>
        )}
      </>
    );
}