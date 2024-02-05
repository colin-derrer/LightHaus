import { ClientData } from "@/types";

export function formatAddedSource(addedSource: ClientData["addedSource"]) {
  switch (addedSource) {
    case "dealer":
      return "Added by dealer";
    case "manager":
      return "Added from manager";
    case "api":
      return "Added automatically";
    case "other":
      return "Added from unknown source";
    default:
      return addedSource;
  }
}

export function formatAddedCause(addedCause: ClientData["addedCause"]) {
  switch (addedCause) {
    case "leaseExpiring":
      return "Lease expiring soon";
    case "newCar":
      return "New car client";
    case "usedCar":
      return "Used car client";
    case "manual":
      return "Added manually";
    case "other":
      return "Unknown added cause";
    default:
      return addedCause;
  }
}
