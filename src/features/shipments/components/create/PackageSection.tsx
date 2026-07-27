import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";
import { Input } from "../../../../components/ui/input";
import { UNITS } from "../../constants/shipment.constants";

interface PackageSectionProps {
  register: UseFormRegister<CreateShipmentInput>;
  errors: FieldErrors<CreateShipmentInput>;
}

export default function PackageSection({ register, errors }: PackageSectionProps) {
  return (
    <div className="bg-[#FAF9FF] p-5 rounded-2xl border border-gray-border/50 flex flex-col gap-4 w-full">
      {/* Title */}
      <h3 className="font-heading font-extrabold text-sm text-dark tracking-wide">
        Package Details
      </h3>

      <div className="flex flex-col gap-3.5">
        {/* Item Description */}
        <Input
          label="Item Description"
          placeholder="Premium Garden Tool Set"
          error={errors.package?.description?.message}
          {...register("package.description")}
        />

        {/* Quantity, Value, Weight, Units - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3.5">
          {/* Quantity */}
          <Input
            label="Quantity"
            type="number"
            placeholder="40"
            error={errors.package?.quantity?.message}
            {...register("package.quantity", { valueAsNumber: true })}
          />

          {/* Value with Dollar sign prefix */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-semibold text-dark font-sans tracking-wide">
              Value
            </label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-medium font-sans text-sm">
                $
              </span>
              <input
                type="number"
                placeholder="3,200"
                {...register("package.value", { valueAsNumber: true })}
                className={`w-full bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 pl-8 pr-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                  errors.package?.value ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                }`}
              />
            </div>
            {errors.package?.value && (
              <span className="text-[11px] text-red-500 font-sans font-medium leading-none" role="alert">
                {errors.package.value.message}
              </span>
            )}
          </div>

          {/* Weight */}
          <Input
            label="Weight"
            type="number"
            placeholder="125"
            error={errors.package?.weight?.message}
            {...register("package.weight", { valueAsNumber: true })}
          />

          {/* Units Selection */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-semibold text-dark font-sans tracking-wide">
              Units
            </label>
            <div className="relative w-full">
              <select
                {...register("package.units")}
                className="appearance-none w-full bg-[#F5F5F5] text-dark font-sans text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                {UNITS.map((u) => (
                  <option key={u} value={u}>
                    {u}
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
        </div>

        {/* Dimensions */}
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-semibold text-dark font-sans tracking-wide">
            Dimensions
          </label>
          <div className="grid grid-cols-3 gap-3">
            {/* Length */}
            <div className="flex flex-col gap-1">
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="80"
                  {...register("package.dimensions.length", { valueAsNumber: true })}
                  className={`w-full bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 pl-4 pr-10 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                    errors.package?.dimensions?.length ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-medium text-xs font-semibold">
                  cm
                </span>
              </div>
              <span className="text-[10px] text-gray-medium font-semibold pl-1">Length</span>
              {errors.package?.dimensions?.length && (
                <span className="text-[9px] text-red-500 font-sans font-medium" role="alert">
                  {errors.package.dimensions.length.message}
                </span>
              )}
            </div>

            {/* Width */}
            <div className="flex flex-col gap-1">
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="60"
                  {...register("package.dimensions.width", { valueAsNumber: true })}
                  className={`w-full bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 pl-4 pr-10 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                    errors.package?.dimensions?.width ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-medium text-xs font-semibold">
                  cm
                </span>
              </div>
              <span className="text-[10px] text-gray-medium font-semibold pl-1">Width</span>
              {errors.package?.dimensions?.width && (
                <span className="text-[9px] text-red-500 font-sans font-medium" role="alert">
                  {errors.package.dimensions.width.message}
                </span>
              )}
            </div>

            {/* Height */}
            <div className="flex flex-col gap-1">
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="ex. 20"
                  {...register("package.dimensions.height", { valueAsNumber: true })}
                  className={`w-full bg-[#F5F5F5] text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 pl-4 pr-10 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                    errors.package?.dimensions?.height ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-medium text-xs font-semibold">
                  cm
                </span>
              </div>
              <span className="text-[10px] text-gray-medium font-semibold pl-1">Height</span>
              {errors.package?.dimensions?.height && (
                <span className="text-[9px] text-red-500 font-sans font-medium" role="alert">
                  {errors.package.dimensions.height.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
