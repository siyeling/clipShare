import { useEffect, useState, useRef, createRef, RefObject } from "react"
import { getDatabase, ref, onChildChanged ,onChildAdded } from "@firebase/database"
import { FIREBASE_DATABASE_URL } from "@/constant/env";
import { AuthGuard } from "@/feature/auth/component/AuthGuard/AuthGuard";
import { NextPage } from "next";
import PostId from "@/component/page/share/PostId";
import "tailwindcss/tailwind.css"


/*
exp db
db {
    ids:{
        id0:{
            lane0:AAAAAAA
        }
    }
}
*/
const idsLength:number = 12;

const defaultIds:string[] = new Array(idsLength).fill("none");

export const Page:NextPage = () => {
    const [ ids, setIds ] = useState<string[]>(defaultIds);
    const [ invisibleLaneNumber, setInvisibleLaneNumber ] = useState<string>("-1");

    const areaRefs = useRef<RefObject<HTMLDivElement>[]>([]);

    ids.forEach((_,index)=>{
        areaRefs.current[index] = createRef<HTMLDivElement>();
    })


    useEffect(()=>{
        try{
            const db = getDatabase(undefined,FIREBASE_DATABASE_URL);
            const dbRef = ref(db,"ids");
            onChildAdded(
                dbRef,
                (snapshot)=>{
                    const data = snapshot.val()
                    const laneNum = Number(Object.keys(data)[0]?.replace("lane",""));
                    const changeData = data[`lane${laneNum}`];
                    console.log(data[`lane${laneNum}`]);
                    setIds((oldIds)=>{
                        return oldIds.map((oldId,index)=>{
                            if(index === laneNum){
                                return changeData;
                            }
                            else{
                                return oldId;
                            }
                        })
                    });
                }
            )
            onChildChanged(
                dbRef,
                (snapshot)=>{
                    const data = snapshot.val()
                    const laneNum = Number(Object.keys(data)[0]?.replace("lane",""));
                    const changeData = data[`lane${laneNum}`];
                    console.log(data[`lane${laneNum}`]);
                    setIds((oldIds)=>{
                        return oldIds.map((oldId,index)=>{
                            if(index === laneNum){
                                return changeData;
                            }
                            else{
                                return oldId;
                            }
                        })
                    });
                }
            )
        }
        catch(e){
            console.log(e);
            return;
        }
    },[])

    const onClickedValue = (e:React.MouseEvent<HTMLInputElement>) => {
        navigator.clipboard.writeText(e.currentTarget.value);
    }

    const onClickedButton = async(e:React.MouseEvent<HTMLButtonElement>) => {
        const idLane = Number(e.currentTarget.id.replace("id_push_button_",""))
        console.log(idLane);
        navigator.clipboard
            .readText()
            .then((clipText:string)=>{
                PostId(idLane,clipText);
            })
    }

    return (
        <AuthGuard>
            <div>
                <div
                    className="text-center"
                >
                    invisible lane is
                    <input
                        className="m-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={invisibleLaneNumber}
                        onChange={
                            (e)=>{
                                if(e.currentTarget.value){
                                    setInvisibleLaneNumber(e.target.value);
                                }
                                else{
                                    setInvisibleLaneNumber("0");
                                }
                                console.log(invisibleLaneNumber);
                            }
                        }
                    />
                </div>
                <div
                    className="px-3 py-2 grid grid-cols-1 2wi:grid-cols-2 3wi:grid-cols-3 4wi:grid-cols-4"
                >
                {
                    ids.map((id:string,index:number)=>{
                        return (
                            <div
                                ref={areaRefs.current[index]}
                                key={index}
                                className={"py-3 px-3 " + (index === Number(invisibleLaneNumber) ? "hidden" : "")}
                            >
                                <div key={index}
                                    className="w-full 1wi:min-w-bt px-3 rounded-3xl ring-1 ring-emerald-500"
                                >
                                    <div
                                        className="text-center text-color"
                                        key={`label${index}`}
                                    >
                                        Lane{index}
                                    </div>
                                    <button
                                        className="block w-full 1wi:min-w-bt rounded bg-amber-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                        key={`push${index}`}
                                        onClick={onClickedButton}
                                        id={`id_push_button_${index}`}
                                    >
                                        Post
                                    </button>
                                    <div
                                        className="py-1"
                                    />
                                    <input
                                        className="block w-full 1wi:min-w-bt rounded bg-indigo-600 px-3 py-6 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        type="button"
                                        key={`get${index}`}
                                        value={id}
                                        onClick={onClickedValue}
                                    />
                                    <div
                                        className="py-2"
                                    />
                                </div>
                            </div>
                        )
                    })
                }                
                </div>
            </div>
        </AuthGuard>
    )
}

export default Page