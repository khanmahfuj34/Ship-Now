import React from "react";
import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";
import { Input } from "../../../../components/ui/input";
import { CARRIERS, SHIPPING_METHODS, FREIGHT_TYPES } from "../../constants/shipment.constants";
import AdditionalServices from "./AdditionalServices";

interface ShippingSectionProps {
  register: UseFormRegister<CreateShipmentInput>;
  errors: FieldErrors<CreateShipmentInput>;
  watch: UseFormWatch<CreateShipmentInput>;
}

export default function ShippingSection({ register, errors, watch }: ShippingSectionProps) {
  // Watch the selected carrier to dynamically render its methods
  const selectedCarrier = watch("shipping.carrier");
  const methods = SHIPPING_METHODS[selectedCarrier] || [];

  return (
    <div className="bg-[#FAF9FF] p-5 rounded-2xl border border-gray-border/50 flex flex-col gap-4 w-full">
      {/* Title */}
      <h3 className="font-heading font-extrabold text-sm text-dark tracking-wide">
        Shipping Details
      </h3>

      <div className="flex flex-col gap-4">
        {/* Freight Type - Radio Row */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-semibold text-dark font-sans tracking-wide">
            Freight Type
          </label>
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-center gap-4 py-1">
            {FREIGHT_TYPES.map((type) => (
              <label
                key={type.value}
                className="flex items-center gap-2 text-xs font-sans font-semibold text-dark cursor-pointer group"
              >
                <input
                  type="radio"
                  value={type.value}
                  {...register("shipping.freightType")}
                  className="w-4 h-4 text-[#856DF3] border-gray-border focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
                />
                <span className="group-hover:text-brand transition-colors">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Carrier, Shipping Method, Shipment ID, Date - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 mt-1">
          {/* Carrier */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-semibold text-dark font-sans tracking-wide">
              Carrier
            </label>
            <div className="relative w-full">
              <select
                {...register("shipping.carrier")}
                className="appearance-none w-full bg-[#F5F5F5] text-dark font-sans text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                {CARRIERS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-semibold text-dark font-sans tracking-wide">
              Shipping Method
            </label>
            <div className="relative w-full">
              <select
                {...register("shipping.method")}
                className={`appearance-none w-full bg-[#F5F5F5] text-dark font-sans text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer ${
                  errors.shipping?.method ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                }`}
              >
                <option value="">Select Method</option>
                {methods.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            {errors.shipping?.method && (
              <span className="text-[11px] text-red-500 font-sans font-medium leading-none" role="alert">
                {errors.shipping.method.message}
              </span>
            )}
          </div>

          {/* Shipment ID */}
          <div className="flex flex-col gap-1.5 w-full">
            <Input
              label="Shipment ID"
              disabled
              readOnly
              className="bg-gray-light cursor-not-allowed opacity-75 font-heading font-extrabold text-dark tracking-wide"
              {...register("shipping.shipmentId")}
            />
            <span className="text-[10px] text-gray-medium font-semibold pl-1 leading-none mt-[-2px]">
              Auto-generated
            </span>
          </div>

          {/* Shipment Date */}
          <div className="flex flex-col gap-1.5 w-full">
            <Input
              label="Shipment Date"
              type="date"
              error={errors.shipping?.date?.message}
              {...register("shipping.date")}
            />
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5 w-full mt-1">
          <label className="text-xs font-semibold text-dark font-sans tracking-wide">
            Notes
          </label>
          <textarea
            placeholder="Add special delivery notes (optional)"
            rows={3}
            {...register("shipping.notes")}
            className="w-full bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
          />
        </div>

        {/* Additional Services Checklist & Notifications toggle (nested inside card layout) */}
        <AdditionalServices register={register} />
      </div>
    </div>
  );
}
