import React from "react";
import { cookies } from "next/headers";
import { verifyToken } from "../../../utils/auth/sign";
import userModel from '../../../models/users'
import connectToDb from "../../../configs/db";
import EditForm from "../../../components/templates/editForm";
export default async function Profiler() {
  const token = cookies().get("token")?.value;
  const tokenPayLoad = verifyToken(token);

  connectToDb()
  const user = await userModel.findOne({email: tokenPayLoad.email})


  return (
    <div className="w-full h-screen flex flex-col items-center justify-between p-[3rem] pb-[17rem]">
      <div className="flex flex-col items-center gap-3 mb-10">
        <img
          src="/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg"
          alt="profile image"
          className="w-[20rem] h-[20rem] rounded-full bg-cover bg-center bg-no-repeat"
        />
        <span className="font-bold text-[1.8rem]">{user.userName}</span>
      </div>
      <EditForm user={user}/>
    </div>
  );
}
