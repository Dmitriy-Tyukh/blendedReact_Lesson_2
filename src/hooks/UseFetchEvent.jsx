import { fetchEventById } from "services/api/EventAPI";
import { useParams } from "react-router-dom/dist";
import { useState, useEffect } from 'react';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEventById(eventId).then(setEvent).catch(console.error);
  }, [eventId]);

  return event;
};