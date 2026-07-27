"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { createShipmentSchema, CreateShipmentInput } from "../../schemas/create-shipment.schema";
import SenderSection from "./SenderSection";
import RecipientSection from "./RecipientSection";
import PackageSection from "./PackageSection";
import ShippingSection from "./ShippingSection";
import { Button } from "../../../../components/ui/button";

export default function CreateShipmentForm() {
  const router = useRouter();
  const [successPayload, setSuccessPayload] = useState<CreateShipmentInput | null>(null);
  const [randomShipmentId] = useState(() => {
    const randomDigits = Math.floor(1000000 + Math.random() * 9000000);
    return `#SH${randomDigits}`;
  });

  // Form setup with default values matching the Figma mockups
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateShipmentInput>({
    resolver: zodResolver(createShipmentSchema),
    mode: "onTouched",
    defaultValues: {
      sender: {
        company: "GreenHaven",
        email: "logistics@greenhaven.com",
        phone: "408-555-7210",
        address: "1120 Birch Street, Portland, OR 97205, USA",
      },
      recipient: {
        company: "FreshNest",
        email: "warehouse@freshnest.com",
        phone: "786-555-4432",
        address: "", // Leave blank to trigger validation error "Address is required" shown in Figma
      },
      package: {
        description: "Premium Garden Tool Set",
        quantity: 40,
        value: 3200,
        weight: 125,
        units: "Kg",
        dimensions: {
          length: 80,
          width: 60,
          height: undefined, // Leave empty to trigger validation on length/width/height if submitted blank
        },
      },
      shipping: {
        freightType: "road",
        carrier: "FedEx",
        method: "", // Leave blank to trigger validation error "Shipping method is required" shown in Figma
        shipmentId: randomShipmentId,
        date: "2035-03-21",
        notes: "",
      },
      additionalServices: {
        insurance: true,
        temperatureControl: true,
        signature: true,
        fragile: false,
      },
      tracking: {
        notifyRecipient: true,
      },
    },
  });

  // Form submission handler
  const onSubmit = (data: CreateShipmentInput) => {
    // Save submission payload to state to show success feedback modal
    setSuccessPayload(data);
  };

  // Reset form helper
  const handleResetForm = () => {
    reset({
      sender: { company: "", email: "", phone: "", address: "" },
      recipient: { company: "", email: "", phone: "", address: "" },
      package: {
        description: "",
        quantity: undefined,
        value: undefined,
        weight: undefined,
        units: "Kg",
        dimensions: { length: undefined, width: undefined, height: undefined },
      },
      shipping: {
        freightType: "road",
        carrier: "FedEx",
        method: "",
        shipmentId: randomShipmentId,
        date: "2035-03-21",
        notes: "",
      },
      additionalServices: {
        insurance: false,
        temperatureControl: false,
        signature: false,
        fragile: false,
      },
      tracking: {
        notifyRecipient: false,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full select-none max-w-7xl lg:mx-0 p-4 md:p-6 lg:p-0">
      {/* 1. Header & Breadcrumbs Row */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-3">
          <Link
            href="/shipments"
            className="text-dark hover:text-brand transition-colors flex items-center justify-center p-1 rounded-lg border border-gray-border hover:bg-gray-light cursor-pointer"
            title="Back to Shipments"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold font-heading text-dark tracking-wide">
            Create New Shipment
          </h1>
        </div>
        
        {/* Breadcrumb Links (Hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans text-gray-medium font-semibold pl-11">
          <Link href="/dashboard" className="text-brand hover:underline transition-colors">
            Dashboard
          </Link>
          <span className="text-[10px] text-gray-medium opacity-55">/</span>
          <Link href="/shipments" className="text-brand hover:underline transition-colors">
            Shipments
          </Link>
          <span className="text-[10px] text-gray-medium opacity-55">/</span>
          <span className="text-gray-medium">Create New Shipment</span>
        </div>
      </div>

      {/* 2. Main Shipment Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 md:p-6 rounded-3xl border border-gray-border/50 shadow-sm flex flex-col gap-6 w-full overflow-hidden"
      >
        <h2 className="text-lg font-bold font-heading text-dark leading-none tracking-wide pb-1">
          Shipment Form
        </h2>

        {/* Sender Info & Recipient Info - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <SenderSection register={register} errors={errors} />
          <RecipientSection register={register} errors={errors} />
        </div>

        {/* Package Details & Shipping Details - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <PackageSection register={register} errors={errors} />
          <ShippingSection register={register} errors={errors} watch={watch} />
        </div>

        {/* Action Buttons Footer */}
        <div className="flex items-center justify-end gap-3.5 border-t border-gray-border/30 pt-5 w-full">
          <button
            type="button"
            onClick={handleResetForm}
            className="flex-1 sm:flex-initial px-6 py-3.5 bg-white border border-gray-border hover:bg-gray-light text-gray-medium font-heading font-semibold text-xs rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]"
          >
            Delete Form
          </button>
          <Button
            type="submit"
            className="flex-1 sm:flex-initial !w-auto !py-3.5 px-7 text-xs"
            isLoading={isSubmitting}
          >
            Submit Shipment
          </Button>
        </div>
      </form>

      {/* 3. Successful Submission Modal Overlay */}
      {successPayload && (
        <div className="fixed inset-0 bg-dark/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-border flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            {/* Green Tick Checkbox */}
            <div className="w-14 h-14 rounded-full bg-[#EBFDF3] text-[#27AE60] flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-heading font-bold text-lg text-dark mb-1">
              Shipment Created Successfully!
            </h3>
            <p className="font-sans text-xs text-gray-medium mb-4 leading-normal">
              Your shipment record has been successfully validated.
            </p>

            {/* Scrollable Payload Box */}
            <div className="w-full bg-[#F5F5F5] rounded-xl p-3 text-left font-mono text-[9px] text-dark max-h-48 overflow-y-auto mb-5 border border-gray-border/60">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(successPayload, null, 2)}
              </pre>
            </div>

            <button
              type="button"
              onClick={() => {
                setSuccessPayload(null);
                router.push("/shipments");
              }}
              className="w-full py-3 px-4 bg-dark hover:bg-[#222222] text-white font-heading font-semibold text-xs rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              OK, Back to Shipments
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
