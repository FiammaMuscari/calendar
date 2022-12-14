import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch(onSetActiveEvent( calendarEvent ));
    }

    const startSavingEvent = async ( calendarEvent ) => {
        // TODO: llegar al backend

        if( calendarEvent._id ){
            // Actualizando
        }else {
            // Creando, simulamos el _id que nos trae el backend
            dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime()}) )
        }
    }


  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
  }
}
