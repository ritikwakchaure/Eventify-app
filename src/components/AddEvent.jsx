import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import { FaPaperPlane } from "react-icons/fa";
import Footer from "./Footer";

export default function AddEvent() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        timeToStart: "",
        timeToEnd: "",
        eventType: "",
        thumbnail: "",
        host: "",
        details: "",
        eventTags: [],
        dressCode: "",
        ageRestrictions:"",
        locationCity: "",
        locationAddress: "",
        price: "",
        speakers: [{ name: "", profileImage: "", role: "" }]
    });
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }));
    };

    const handleSpeakerChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSpeakers = [...formData.speakers];
        updatedSpeakers[index] = {
            ...updatedSpeakers[index],
            [name]: value
        };
        setFormData(prev => ({
            ...prev,
            speakers: updatedSpeakers
        }));
    };

    const handleTagsChange = (e) => {
        const tags = e.target.value.split(',').map(tag => tag.trim());
        setFormData(prev => ({
            ...prev,
            eventTags: tags
        }));
    };

   const formSubmit = async (e) => {
    e.preventDefault();

    try {
        // console.log("Submitting:", formData);
        const response = await fetch(`https://eventify-app-backend.vercel.app/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            console.error("Server error:", errorData);
            throw new Error(errorData.message || "Failed to add event");
        }else{
            const data = await response.json();

            if(data){
                setSuccessMessage("Event added successfully.");

                // Reset form after successful submission
            setFormData({
                title: "",
                date: "",
                timeToStart: "",
                timeToEnd: "",
                eventType: "",
                thumbnail: "",
                host: "",
                details: "",
                eventTags: [],
                dressCode: "",
                ageRestrictions: "",
                locationCity: "",
                locationAddress: "",
                price: "",
                speakers: [{ name: "", profileImage: "", role: "" }]
            });

            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
            }
        }
    } catch (error) {
        console.error("Full error:", error); 
        setSuccessMessage("Event does not added: " + error.message);
    }
};

    return (
        <>
            <Header />
            <main style={{minWidth:"320px",minHeight:"100vh"}} className="mb-5">
                <div className="container py-4">
                    
                    {successMessage ? (
                        <div className="fs-2 fw-semibold">{successMessage}</div> 
                    ): 
                    <div>
                        <h1 className="fw-bold">Add a Event</h1>
                     <form onSubmit={formSubmit} className="py-3">
                        <label htmlFor="title" className="fs-3">Title:</label>
                        <input 
                            type="text" 
                            className="form-control fs-4 mt-2" 
                            id="title" 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required 
                        />

                        <label htmlFor="date" className="fs-3 mt-3">Date of Event:</label>
                        <input 
                            type="date" 
                            className="form-control fs-4 mt-2" 
                            id="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required 
                        />

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label htmlFor="timeToStart" className="fs-3 mt-4">Start time of Event:</label>
                                <input 
                                    type="time" 
                                    className="form-control fs-4 mt-2" 
                                    id="timeToStart" 
                                    name="timeToStart"
                                    value={formData.timeToStart}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="timeToEnd" className="fs-3 mt-4">End time of Event:</label>
                                <input 
                                    type="time" 
                                    className="form-control fs-4 mt-2" 
                                    id="timeToEnd" 
                                    name="timeToEnd"
                                    value={formData.timeToEnd}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="thumbnail" className="fs-3 mt-4">Thumbnail URL:</label>
                                <input 
                                    type="text" 
                                    className="form-control fs-4 mt-2" 
                                    id="thumbnail" 
                                    name="thumbnail"
                                    value={formData.thumbnail}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price" className="fs-3 mt-4">Price:</label>
                                <input 
                                    type="number" 
                                    className="form-control fs-4 mt-2" 
                                    id="price" 
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="host" className="fs-3 mt-4">Organiser/Host:</label>
                                <input 
                                    type="text" 
                                    className="form-control fs-4 mt-2" 
                                    id="host" 
                                    name="host"
                                    value={formData.host}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="eventType" className="fs-3 mt-4">Type of Event:</label>
                                <select 
                                    id="eventType" 
                                    className="form-select fs-4 mt-2" 
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select type</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="details" className="fs-3 mt-4">Event Details:</label>
                        <textarea 
                            className="form-control fs-4 mt-2" 
                            id="details" 
                            rows="5" 
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <label htmlFor="eventTags" className="fs-3 mt-4">Tags of Event (comma separated):</label>
                        <input 
                            type="text" 
                            id="eventTags" 
                            className="form-control fs-4 mt-2" 
                            onChange={handleTagsChange}
                            placeholder="write searching tags related event like ai, technology, blockchain, etc..."
                            required
                        />

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="dressCode" className="fs-3 mt-4">Dress code:</label>
                                <input 
                                    type="text" 
                                    id="dressCode" 
                                    className="form-control mt-2 fs-4" 
                                    name="dressCode"
                                    value={formData.dressCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="ageRestrictions" className="fs-3 mt-4">Age Restrictions:</label>
                                <input 
                                    type="text" 
                                    id="ageRestrictions" 
                                    className="form-control mt-2 fs-4" 
                                    name="ageRestrictions"
                                    value={formData.ageRestrictions}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="locationCity" className="fs-3 mt-4">City:</label>
                                <input 
                                    type="text" 
                                    id="locationCity" 
                                    className="form-control fs-4 mt-2" 
                                    name="locationCity"
                                    value={formData.locationCity}
                                    onChange={handleChange}
                                  required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="locationAddress" className="fs-3 mt-4">Address:</label>
                                <input 
                                    type="text" 
                                    id="locationAddress" 
                                    className="form-control fs-4 mt-2" 
                                    name="locationAddress"
                                    value={formData.locationAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <label className="fs-3 mt-4">Speakers:</label>

                        {formData.speakers.map((speaker, index) => (
                            <div className="row" key={index}>
                                <div className="col-md-4">
                                    <label htmlFor={`name-${index}`} className="fs-3 mt-4">Speaker's Name:</label>
                                    <input 
                                        type="text" 
                                        id={`name-${index}`} 
                                        className="form-control fs-4 mt-2" 
                                        name="name"
                                        value={speaker.name}
                                        onChange={(e) => handleSpeakerChange(index, e)}
                                        required 
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor={`profileImage-${index}`} className="fs-3 mt-4">Speaker's profile image:</label>
                                    <input 
                                        type="text" 
                                        id={`profileImage-${index}`} 
                                        className="form-control fs-4 mt-2" 
                                        name="profileImage"
                                        value={speaker.profileImage}
                                        onChange={(e) => handleSpeakerChange(index, e)}
                                        required 
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor={`role-${index}`} className="fs-3 mt-4">Speaker's role:</label>
                                    <input 
                                        type="text" 
                                        id={`role-${index}`} 
                                        className="form-control fs-4 mt-2" 
                                        name="role"
                                        value={speaker.role}
                                        onChange={(e) => handleSpeakerChange(index, e)}
                                        required 
                                    />
                                </div>
                            </div>
                        ))}

                        <button type="submit" className="py-2 fs-3 btn btn-outline-primary mt-5">
                            Submit <FaPaperPlane />
                        </button>
                    </form>
                    </div>
 }

                </div>
            </main>

            <Footer/>
        </>
    );
}
