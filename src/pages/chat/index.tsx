import { FormEvent, useEffect, useState } from "react"
import { getDatabase, set, ref, onChildChanged} from "@firebase/database"
import { FIREBASE_DATABASE_URL } from "@/constant/env";
import { AuthGuard } from "@/feature/auth/component/AuthGuard/AuthGuard";
//import type { Chat } from "@/types";

//const itemLength:number = 4;
export const Page = () => {
    const [ message, setMessage ] = useState<string>("");
    const [ chat, setChat ] = useState<string>("");

    const handleSendMessage = async(e:FormEvent<HTMLFormElement>) => {
        //console.log(message);
        e.preventDefault();
        try{
            const db = getDatabase(undefined,FIREBASE_DATABASE_URL);
            const dbRef = ref(db, "chat1");
            await set(
                dbRef,
                {
                    message:message
                }
            )
            setMessage("");
        }
        catch(e){
            console.log(e);
        }
    }

    

    useEffect(()=>{
        console.log("useEffect");
        try{
            const db = getDatabase(undefined, FIREBASE_DATABASE_URL);
            const dbRef = ref(db, "chat1");
            console.log(dbRef)
            return onChildChanged(
                dbRef,
                (snapshot)=>{
                    console.log(snapshot);
                    const message = snapshot.val()
                    console.log(message);
                    setChat(message);
                }
            )
        }
        catch(e){
            console.log(e);
            return;
        }
    },[]);


    return (
        <AuthGuard>
            <div>
                chat page
            </div>
            <form onSubmit={handleSendMessage}>
                <input 
                    value={message}
                    onChange={
                        (e)=>{
                            setMessage(e.target.value)
                        }
                    }
                />
                <button type="submit">送信</button>
            </form>
            <div>
                受信
            </div>
            <div>
                {chat}
            </div>
        </AuthGuard>
    )
}

export default Page