import { Socket } from "socket.io";
import {v4 as uuidV4} from 'uuid'
export const roomHandler = (socket:Socket)=>{
    const createRoom = ()=>{
        const roomID = uuidV4();
        socket.emit("room-created",{roomID})
        console.log("User created the room.", roomID)
    }
    const joinRoom = ({roomID}:{roomID : 'string'})=>{
        
        socket.join(roomID)
        console.log("User joined the room.", roomID)
    }
    socket.on("create-room",createRoom)
    socket.on("join-room",joinRoom)
}