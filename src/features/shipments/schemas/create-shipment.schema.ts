import { z } from "zod";

export const createShipmentSchema = z.object({
  sender: z.object({
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
  }),
  recipient: z.object({
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
  }),
  package: z.object({
    description: z.string().min(1, "Item description is required"),
    quantity: z.number({ message: "Quantity is required" })
      .int("Quantity must be an integer")
      .positive("Quantity must be a positive number"),
    value: z.number({ message: "Value is required" })
      .positive("Value must be a positive number"),
    weight: z.number({ message: "Weight is required" })
      .positive("Weight must be a positive number"),
    units: z.string().min(1, "Unit is required"),
    dimensions: z.object({
      length: z.number({ message: "Length is required" })
        .positive("Length must be a positive number"),
      width: z.number({ message: "Width is required" })
        .positive("Width must be a positive number"),
      height: z.number({ message: "Height is required" })
        .positive("Height must be a positive number"),
    }),
  }),
  shipping: z.object({
    freightType: z.enum(["road", "rail", "ocean", "air"]),
    carrier: z.string().min(1, "Carrier is required"),
    method: z.string().min(1, "Shipping method is required"),
    shipmentId: z.string(),
    date: z.string().min(1, "Shipment date is required"),
    notes: z.string().optional(),
  }),
  additionalServices: z.object({
    insurance: z.boolean(),
    temperatureControl: z.boolean(),
    signature: z.boolean(),
    fragile: z.boolean(),
  }),
  tracking: z.object({
    notifyRecipient: z.boolean(),
  }),
});

export type CreateShipmentInput = z.infer<typeof createShipmentSchema>;
