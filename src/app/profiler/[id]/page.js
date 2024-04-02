import React from "react";
import userModel from '../../../../models/users';
import connectToDb from "../../../../configs/db";
import EditForm from "../../../../components/templates/editForm";
export default async function Profiler({ params }) {

  connectToDb();
  const user = await userModel.findOne({ _id: params.id });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between p-[3rem] pb-[17rem]">
      <div className="flex flex-col items-center gap-3 mb-10">
        <img
          src={user.profileImage ? user.profileImage : "/images/images.jpg"}
          alt="profile image"
          className="w-[20rem] h-[20rem] rounded-full bg-cover bg-center bg-no-repeat"
        />
        <span className="font-bold text-[1.8rem]">{user.userName}</span>
      </div>
      <EditForm user={user} />
    </div>
  );
}
