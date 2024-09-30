"use client"
import { useAppSelector } from "@/redux/store";
import Login from "./Login";
import { useSelector } from "react-redux";

export default function Home() {

  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
  return (
    <div className="">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Login />

        <h2>Username: {username}</h2>
        { isModerator && <h1> This is a Moderator.</h1> }
      </main> 
    </div>
  );
}
