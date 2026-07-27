import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";
import { Input } from "../../../../components/ui/input";

interface SenderSectionProps {
  register: UseFormRegister<CreateShipmentInput>;
  errors: FieldErrors<CreateShipmentInput>;
}

export default function SenderSection({ register, errors }: SenderSectionProps) {
  return (
    <div className="bg-[#FAF9FF] p-5 rounded-2xl border border-gray-border/50 flex flex-col gap-4 w-full">
      {/* Title */}
      <h3 className="font-heading font-extrabold text-sm text-dark tracking-wide">
        Sender Info
      </h3>

      {/* Fields */}
      <div className="flex flex-col gap-3.5">
        {/* Company */}
        <Input
          label="Company"
          placeholder="GreenHaven"
          error={errors.sender?.company?.message}
          {...register("sender.company")}
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="logistics@greenhaven.com"
          error={errors.sender?.email?.message}
          {...register("sender.email")}
        />

        {/* Phone Number with Flag Dropdown */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-semibold text-dark font-sans tracking-wide">
            Phone Number
          </label>
          <div className="flex gap-2">
            <select className="bg-[#F5F5F5] border border-transparent rounded-xl px-3 py-3 text-xs md:text-sm outline-none focus:outline-none focus:bg-white focus:border-brand text-dark font-sans cursor-pointer transition-all duration-200 border-gray-border/30">
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>
            <input
              type="text"
              placeholder="408-555-7210"
              {...register("sender.phone")}
              className={`flex-1 bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                errors.sender?.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
              }`}
            />
          </div>
          {errors.sender?.phone && (
            <span className="text-[11px] text-red-500 font-sans font-medium leading-none" role="alert">
              {errors.sender.phone.message}
            </span>
          )}
        </div>

        {/* Pickup Address */}
        <Input
          label="Pickup Address"
          placeholder="Street address, city, state/province, ZIP code"
          error={errors.sender?.address?.message}
          {...register("sender.address")}
        />
      </div>
    </div>
  );
}
