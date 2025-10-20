import { useParams, useNavigate } from "react-router";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useState } from "react";
import Footer from "../components/Footer";

const EventDetails = () =>{
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const navigate = useNavigate()
    const {data,loading,error} = useFetch("https://eventify-app-backend.vercel.app/events")
    // console.log(data);

    const eventId = useParams();
    // console.log(eventId.eventId);

    const eventData = data?.find((event)=>event._id == eventId.eventId)
    // console.log(eventData)

    const handleDelete = async (eventId) =>{
        try{
            const response = await fetch(`https://eventify-app-backend.vercel.app/events/id/${eventId}`,{
                method: "DELETE",
            });

            if(!response.ok){
                throw "Failed to delete data"
            }else{
                const data = await response.json();
                // console.log(data);

                if(data){
                    setDeleteSuccess(true);
                    setTimeout(()=> {navigate("/")},2000)
                }
            }
            
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <Header/>
        
        <main className="container py-4 mb-5">
         {loading ? 
           <div>
             <p className="fs-4 fw-semibold" >Loading...</p> 
           </div>
            : (
                <div>
                 {deleteSuccess && <p className="fs-4 fw-semibold py-2">Event deleted successfully.</p>}

                 {eventData ? (
                <div className="row">
                    <div className="col-md-8 pe-5">
                    <h1>{eventData.title}</h1>

                    <div className="py-2">
                        <span className="fw-semibold"><GoOrganization /> Hosted By: </span>
                    <p className="fs-5"><strong>{eventData.host}</strong></p>
                    </div>

                    <img src={eventData.thumbnail} alt={eventData.title} 
                    className="img-fluid rounded"/>

                    <div className=" py-3 mt-2">
                        <h2>Details: </h2>
                        <p>{eventData.details}</p>
                   
                        <div className="py-3">
                            <h2>Additional Information:</h2>
                        <div><strong>Dress Code: </strong>{eventData.dressCode}</div>
                        <p><strong>Age Restrictions: </strong>{eventData.ageRestrictions}</p>
                      
                        </div>

                        <div className="mb-3">
                            <h2>Event Tags: </h2>
                        {eventData.eventTags.map((tag)=><span key={tag} className="badge bg-danger btn-sm me-2 py-2 mt-2">{tag}</span>)}
                       </div>   
                         </div>
                    </div>

                    <div className="col-md-4 ps-2">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <div className="fw-bold"><IoIosTime/> Duration:</div>
                                    <div className="mt-1 ms-4">                                  
                                    {eventData.date} at {eventData.timeToStart} to
                                    <p>{eventData.date} at {eventData.timeToEnd}</p>
                                    </div>                                    
                                </div>

                                <div>
                                   <div className="fw-bold"><IoLocationSharp/> Location:</div>
                                    <div className="mt-1 ms-4">
                                        {eventData.locationCity},
                                    <p>{eventData.locationAddress}</p>
                                    </div>
                                    
                                </div>

                               <div className="fw-bold">
                                <IoPricetags/>  Price:
                                </div>
                                 <div className="mt-1 ms-4">
                                  <span>{eventData.price === 0 ? "Free" : <span><MdOutlineCurrencyRupee/> {eventData.price}</span>}</span>                              
                               </div>
                            </div>
                        </div>

                        <div className="py-4">
                            <h3>Speakers: ({eventData.speakers.length})</h3>

                            <div className="row">
                            {eventData.speakers ? (
                                eventData.speakers.map((speaker)=>(
                                    <div className="col-md-6 mt-4" key={speaker.name}>
                                        <div className="card h-100">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center">
                                                <div>
                                                    <img src={speaker.profileImage}
                                                className="img-fluid rounded-circle"
                                                style={{border:"3px solid #f0f0f0", 
                                                            width: "100px",
                                                            height: "100px",
                                                            objectFit: "cover",}}
                                                alt={speaker.name} />
                                                </div>
                                                <strong>{speaker.name}</strong>
                                                <p>{speaker.role}</p>
                                            </div>
                                        </div>
                                        </div>
                                   </div>
                                
                            
                                ))
                            ):(<p>Speakers deos not found</p>)}
                            </div>
                            <div className="mt-5 text-center">
                                <button onClick={()=>handleDelete(eventData._id)} className="btn btn-danger mt-3 py-2 fs-5 fw-bold">Delete <RiDeleteBin4Fill/></button>
                            </div>

                            
                        </div>
                     </div>
                </div>
                ) : (
                    <div>
                        <p className="fs-4 fw-semibold">Event does not found</p>
                         {error && 
                         <p className="fs-4 fw-semibold" >An error occurred while fetching data. {error}</p>}
                    </div>
                   
                    
                )}
            </div>
         )}        
        </main>

        <Footer/>
        </>
    )
}
export default EventDetails;
