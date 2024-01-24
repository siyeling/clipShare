import { FIREBASE_DATABASE_URL } from "@/constant/env";
import axios from "axios";

const PostId = (laneNum:number,postData:string) => {
    axios.put(
        `${FIREBASE_DATABASE_URL}/ids/id${laneNum}.json`,
        JSON.stringify({
            [`lane${laneNum}`]:postData
        })
    )
}

export default PostId

