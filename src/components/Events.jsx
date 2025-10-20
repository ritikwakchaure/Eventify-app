import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";

const MeetupEvents = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("");
    const { data, loading, error } = useFetch("https://eventify-app-backend.vercel.app/events");

    useEffect(()=>{
        if(data){
            setFilteredEvents(data)
        }
    },[data])

    const handleEventType=(event)=>{
        const {value} = event.target;
        setSelectedEvent(value);

        const filterEventData = value==="" || value==="All Events" ? data : (
            data?.filter((type)=>type.eventType === value)
        )

        setFilteredEvents(filterEventData)

    }

    const handleSearchInput=(event)=>{
        const {value} = event.target
        setSearchInput(value);

        if(data && !error){
            const searchEvent = value === "" ? data : 
            data.filter((search)=>(
            search.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            search.eventTags.join(",").toLowerCase().includes(searchInput.toLowerCase())
            ))
            setFilteredEvents(searchEvent)
        }
    }

    const navigate = useNavigate()

    return (
        <div style={{marginBottom:"130px"}}>
            <div className="row py-2 mt-5 align-items-center">
                <div className="col-md-7">
                    <h1 className="fw-bold">Eventify Events</h1>
                </div>

                <div className="col-md-5 d-flex justify-content-end gap-3">
                    <div className="flex-grow-1" style={{maxWidth:"45%"}}>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="🔍︎ Search by title and tags"
                                value={searchInput} 
                                onChange={handleSearchInput}
                                aria-describedby="basic-addon1" 
                            />
                        </div>
                    </div>

                    <div style={{width:"40%"}}>
                        <select 
                            value={selectedEvent}
                            onChange={handleEventType} 
                            className="form-select"  
                            required
                        >
                            <option value="">Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="All Events">All Events</option>
                        </select>
                    </div>

                   
                </div>
            </div>
       
            {loading ? (
                <p className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Loading...</p>
            ) : error ? (
                <p className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>
                    An error occurred while fetching the data. {error}
                </p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div className="col py-4" key={event._id}>
                                <div 
                                    className="card h-100 border shadow"
                                    onClick={() => navigate(`/events/${event._id}`)}
                                > 
                                    <img 
                                        src={event.thumbnail} 
                                        alt={event.title}
                                        className="card-img-top img-fluid" 
                                        style={{height:"200px", objectFit:"cover"}}
                                    />
                                    
                                    <div className="card-img-overlay">
                                        <p className="badge py-2 fs-6 bg-light text-dark fw-bold">
                                            {event.eventType} Event
                                        </p>
                                    </div>
                                    
                                    <div className="card-body p-3">
                                        <div className="text-muted mb-3">
                                            {event.date} • {event.timeToStart}
                                        </div>
                                        <h5 className="fw-bold">{event.title}</h5>
                                    </div>                                 
                                 </div>
                            </div>
                        ))
                    ) : (
                        <p className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>
                           Eventify event does not found.
                        </p>
                    )}                     
                </div>
            )}
        </div>
    );
};

export default MeetupEvents;