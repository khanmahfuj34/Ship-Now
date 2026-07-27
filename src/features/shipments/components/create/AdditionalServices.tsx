import React from "react";
import { UseFormRegister } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";

interface AdditionalServicesProps {
  register: UseFormRegister<CreateShipmentInput>;
}

export default function AdditionalServices({ register }: AdditionalServicesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full border-t border-gray-border/30 pt-5">
      {/* 1. Left Side: Additional Services Checkboxes */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] uppercase font-extrabold text-gray-medium tracking-wider font-sans">
          Additional Services
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Insurance */}
          <label className="flex items-center gap-2.5 text-xs font-sans font-semibold text-dark cursor-pointer group select-none">
            <input
              type="checkbox"
              {...register("additionalServices.insurance")}
              className="w-4 h-4 text-[#856DF3] border-gray-border rounded focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
            />
            <span className="group-hover:text-brand transition-colors">
              Insurance Coverage
            </span>
          </label>

          {/* Temperature Control */}
          <label className="flex items-center gap-2.5 text-xs font-sans font-semibold text-dark cursor-pointer group select-none">
            <input
              type="checkbox"
              {...register("additionalServices.temperatureControl")}
              className="w-4 h-4 text-[#856DF3] border-gray-border rounded focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
            />
            <span className="group-hover:text-brand transition-colors">
              Temperature Control
            </span>
          </label>

          {/* Signature */}
          <label className="flex items-center gap-2.5 text-xs font-sans font-semibold text-dark cursor-pointer group select-none">
            <input
              type="checkbox"
              {...register("additionalServices.signature")}
              className="w-4 h-4 text-[#856DF3] border-gray-border rounded focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
            />
            <span className="group-hover:text-brand transition-colors">
              Signature on Delivery
            </span>
          </label>

          {/* Fragile Item Handling */}
          <label className="flex items-center gap-2.5 text-xs font-sans font-semibold text-dark cursor-pointer group select-none">
            <input
              type="checkbox"
              {...register("additionalServices.fragile")}
              className="w-4 h-4 text-[#856DF3] border-gray-border rounded focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
            />
            <span className="group-hover:text-brand transition-colors">
              Fragile Item Handling
            </span>
          </label>
        </div>
      </div>

      {/* 2. Right Side: Tracking & Status Updates Slider Toggle */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] uppercase font-extrabold text-gray-medium tracking-wider font-sans">
          Tracking & Status Updates
        </span>
        
        <label className="flex items-center gap-3.5 cursor-pointer group select-none py-1">
          <div className="relative">
            <input
              type="checkbox"
              {...register("tracking.notifyRecipient")}
              className="sr-only peer"
            />
            {/* Toggle Track */}
            <div className="w-10 h-6 bg-[#E5E5E5] rounded-full peer-checked:bg-[#856DF3] transition-colors duration-200 ease-in-out" />
            {/* Toggle Circle thumb */}
            <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4 shadow-sm" />
          </div>
          <span className="text-xs font-sans font-semibold text-dark group-hover:text-brand transition-colors">
            Notify Recipient via Email/SMS
          </span>
        </label>
      </div>
    </div>
  );
}
