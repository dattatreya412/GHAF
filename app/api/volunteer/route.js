import Volunteer from "../../models/volunteer.model";
import {connectDB} from "../../lib/mongodb";

export async function POST(request){
    try{
        const body = await request.json();
        console.log("Received volunteer data:", body);
        await connectDB();
        const volunteerInfo = await Volunteer.create(body);
        return new Response(JSON.stringify({ message: "Volunteer data received successfully.", volunteerInfo }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
    });
    }catch(error){
        console.error("Error processing volunteer data:", error);
        return new Response(JSON.stringify({ message: "Error processing volunteer data." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
}

