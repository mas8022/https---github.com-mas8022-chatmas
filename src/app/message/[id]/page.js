import React from "react";
import Text from "../../../../components/modules/text";
import MessageBox from "../../../../components/templates/messageBox";
import userModel from "@/models/users";
import chatModel from "@/models/chat";
import Me from "@/utils/me";

export default async function Message({ params }) {
  const me = await Me();
  const user = await userModel.findOne(
    { _id: params.id },
    "_id userName profileImage"
  );

  const messageArray = await chatModel
    .findOne(
      {
        $or: [
          { from: me._id, to: params.id },
          { from: params.id, to: me._id },
        ],
      },
      "messages"
    )
    .populate("messages");

  const allMessage = messageArray.messages;
  const meMessage = allMessage.filter(
    (item) => String(item.user) === String(me._id)
  );
  const youMessage = allMessage.filter(
    (item) => String(item.user) !== String(me._id)
  );


  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="w-full h-[10rem] flex items-center gap-5 px-11">
        <img
          className="rounded-[50%] w-[7rem] h-[7rem]"
          src={
            user && user.profileImage ? user.profileImage : "/images/images.jpg"
          }
          alt="profile image"
        />
        <div className="w-full h-full flex flex-col gap-3 justify-center">
          <span className="text-slate-700 font-extrabold text-[1.7rem]">
            {user.userName}
          </span>
          <span className="text-[1.4rem] font-medium">online</span>
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-[#e5ffe3] to-slate-50 "></div>
      <div className="w-full h-[53rem] py-10 flex flex-col gap-10 px-12 overflow-y-scroll">
        {allMessage && allMessage.length
          ? allMessage.map((item) => {
              if (String(item.user) === String(me._id)) {
                return <Text subject={"me"} text={item.content} />;
              }
              return (
                <Text subject={"you"} text={item.content} />
              );
            })
          : null}
      </div>

      <MessageBox toId={params.id} />
    </div>
  );
}
