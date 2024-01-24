import { FIREBASE_DATABASE_URL } from "@/constant/env";
import axios from "axios";

type responseData = {
    data:string;
}

const CorrectPass:string = await(
    axios.get(
        `${FIREBASE_DATABASE_URL}/pass.json`
    )
    .then(
        (response:responseData)=>{
            return response.data;
        }
    )
)

export default CorrectPass;