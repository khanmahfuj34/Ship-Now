import React from "react";
import { UseFormWatch } from "react-hook-form";
import { CreateShipmentInput } from "../../schemas/create-shipment.schema";

interface ShipmentSummaryProps {
  watch: UseFormWatch<CreateShipmentInput>;
}

export default function ShipmentSummary({ watch }: ShipmentSummaryProps) {
  // Watch necessary form values to derive costs dynamically
  const carrier = watch("shipping.carrier");
  const method = watch("shipping.method");
  const quantity = Number(watch("package.quantity") || 0);
  const weight = Number(watch("package.weight") || 0);
  
  const insurance = watch("additionalServices.insurance");
  const temperature = watch("additionalServices.temperatureControl");
  const signature = watch("additionalServices.signature");
  const fragile = watch("additionalServices.fragile");

  // Calculate costs
  const getBaseRate = () => {
    if (!method) return 0;
    if (method.includes("Overnight") || method.includes("Air")) return 50;
    if (method.includes("Express") || method.includes("Saver")) return 30;
    return 15; // standard / ground
  };

  const baseRate = getBaseRate();
  const baseTotal = baseRate * quantity;

  // Weight charge: e.g. $0.25 per kg
  const weightCharge = parseFloat((weight * 0.25 * quantity).toFixed(2));

  // Additional services fee totals
  let servicesTotal = 0;
  if (insurance) servicesTotal += 10;
  if (temperature) servicesTotal += 25;
  if (signature) servicesTotal += 5;
  if (fragile) servicesTotal += 15;
  const servicesGrandTotal = servicesTotal * quantity;

  const grandTotal = baseTotal + weightCharge + servicesGrandTotal;

  return (
    <div className="bg-[#FAF9FF] p-5 rounded-2xl border border-gray-border/50 flex flex-col gap-4 w-full border-t border-gray-border/30 mt-3 select-none">
      {/* Title */}
      <h3 className="font-heading font-extrabold text-sm text-dark tracking-wide">
        Shipment Summary & Cost
      </h3>

      {/* Grid containing summary metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:divide-x md:divide-gray-border/30">
        {/* Route Details Summary */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold text-gray-medium tracking-wide">
            Details
          </span>
          <div className="flex flex-col gap-1.5 font-sans text-xs text-dark leading-tight">
            <div>
              <span className="font-semibold text-gray-medium">Carrier:</span>{" "}
              <span className="font-bold">{carrier || "None"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-medium">Method:</span>{" "}
              <span className="font-bold">{method || "Not Selected"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-medium">Package:</span>{" "}
              <span className="font-bold">
                {quantity} pcs ({weight} Kg total)
              </span>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="flex flex-col gap-2 md:pl-4">
          <span className="text-[10px] uppercase font-bold text-gray-medium tracking-wide">
            Cost Breakdown
          </span>
          <div className="flex flex-col gap-1.5 font-sans text-xs text-dark">
            <div className="flex justify-between">
              <span className="text-gray-medium font-semibold">Base Shipping Fee:</span>
              <span className="font-bold">${baseTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-medium font-semibold">Weight Surcharge:</span>
              <span className="font-bold">${weightCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-medium font-semibold">Service Surcharges:</span>
              <span className="font-bold">${servicesGrandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Total Cost */}
        <div className="flex flex-col gap-2 justify-center items-end md:pl-4">
          <span className="text-[10px] uppercase font-bold text-gray-medium tracking-wide">
            Total Price
          </span>
          <div className="flex flex-col items-end leading-none">
            <span className="text-2xl font-extrabold text-[#856DF3] font-heading tracking-wide">
              ${grandTotal.toFixed(2)}
            </span>
            <span className="text-[9px] text-gray-medium font-semibold mt-1">
              Estimated Delivery Cost
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
