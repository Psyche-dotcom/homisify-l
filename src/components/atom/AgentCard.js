import React from "react";
import CustomTag from "./CustomTag";

const AgentCard = ({
  AgentName,
  ImgUrl,
  ImgUrl1,
  ImgUrl2,
  WhatsAppPhoneNumber,
  PhoneNumber,
}) => {
  return (
    <section className="bg-white rounded-3xl flex flex-col gap-5 p-8">
      <div className="flex gap-3 items-center">
        <img src={ImgUrl} alt="agent-photo" className="rounded-full" />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs text-grey-prop">Property Agent</p>
            <h2 className="text-xl font-bold">{AgentName}</h2>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <CustomTag text={WhatsAppPhoneNumber} imgUrl={ImgUrl1} />
            <CustomTag text={PhoneNumber} imgUrl={ImgUrl2} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <h4 className="text-grey-prop text-base">Safety Tips:</h4>
        <p>
          Do not make any inspection fee without seeing the agent and property.
        </p>
        <p>
          Only pay Rental fee, Sales fee or any upfront payment after you verify
          the Landlord.
        </p>
        <p>
          Only pay Rental fee, Sales fee or any upfront payment after you verify
          the Landlord.
        </p>
      </div>
      <button className="bg-home-grey text-orange-col rounded-lg px-4 py-2 cursor-pointer hover:bg-orange-col hover:text-black self-end">
        Report Property
      </button>
    </section>
  );
};

export default AgentCard;
