import { ClientData } from "@/lib/types";
import { LeadReason, LeadSource } from "@prisma/client";

export function formatAddedSource(addedSource: LeadSource) {
  switch (addedSource) {
    case "MANUAL_SELF":
      return "Added by dealer";
    case "MANUAL_MANAGER":
      return "Added from manager";
    case "AUTOLEAD":
      return "Added automatically";
    case "WALK_IN":
      return "Walk-in client";
    case "WEBSITE":
      return "Added from website";
    case "UNKNOWN":
      return "Added from unknown source";
    default:
      return addedSource;
  }
}

export function formatAddedCause(addedCause: LeadReason) {
  switch (addedCause) {
    case "LEASE_EXPIRING_SOON":
      return "Lease expiring soon";
    case "FOLLOW_UP":
      return "Purchase follow up";
    case "HIGH_MILEAGE_VEHICLE":
      return "Vehicle has high mileage";
    case "INQUIRY":
      return "Client inquired";
    case "LAST_GEN_VEHICLE":
      return "Last generation vehicle";
    case "UNKNOWN":
      return "Unknown added cause";

    default:
      return addedCause;
  }
}
