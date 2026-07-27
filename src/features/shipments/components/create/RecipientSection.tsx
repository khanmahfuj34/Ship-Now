import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";
import { Input } from "../../../../components/ui/input";

interface RecipientSectionProps {
  register: UseFormRegister<CreateShipmentInput>;
  errors: FieldErrors<CreateShipmentInput>;
}

export default function RecipientSection({ register, errors }: RecipientSectionProps) {
  return (
    <div className="bg-[#FAF9FF] p-5 rounded-2xl border border-gray-border/50 flex flex-col gap-4 w-full">
      {/* Title */}
      <h3 className="font-heading font-extrabold text-sm text-dark tracking-wide">
        Recipient Info
      </h3>

      {/* Fields */}
      <div className="flex flex-col gap-3.5">
        {/* Company */}
        <Input
          label="Company"
          placeholder="FreshNest"
          error={errors.recipient?.company?.message}
          {...register("recipient.company")}
        />

        {/* Email & Phone Number Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 min-w-0">
          {/* Email */}
          <div className="min-w-0">
            <Input
              label="Email"
              type="email"
              placeholder="warehouse@freshnest.com"
              error={errors.recipient?.email?.message}
              {...register("recipient.email")}
            />
          </div>

          {/* Phone Number with Flag Dropdown */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="text-xs font-semibold text-dark font-sans tracking-wide">
              Phone Number
            </label>
            <div className="flex gap-2 min-w-0">
              <select className="w-[84px] flex-shrink-0 bg-[#F5F5F5] border border-transparent rounded-xl px-2 py-3 text-xs md:text-sm outline-none focus:outline-none focus:bg-white focus:border-brand text-dark font-sans cursor-pointer transition-all duration-200 border-gray-border/30">
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                type="text"
                placeholder="786-555-4432"
                {...register("recipient.phone")}
                className={`flex-1 min-w-0 bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                  errors.recipient?.phone ? "border-brand focus:border-brand focus:ring-brand/20" : ""
                }`}
              />
            </div>
            {errors.recipient?.phone && (
              <span className="text-[11px] text-brand font-sans font-semibold leading-none" role="alert">
                {errors.recipient.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Delivery Address */}
        <Input
          label="Delivery Address"
          placeholder="Street address, city, state/province, ZIP code"
          error={errors.recipient?.address?.message}
          {...register("recipient.address")}
        />
      </div>
    </div>
  );
}
