export type ClientData = {
  id: string;
  name: string;
  autogenDescription: string;
  addedSource: "dealer" | "api" | "manager" | "other";
  addedCause: ("leaseExpiring" | "newCar" | "usedCar" | "manual" | "other")[];
  events: ClientEventData[];

  email?: string;
  phone?: string;
  estimatedSalary?: number;
  age?: number;
  familyMembers?: number;
  address?: string;

  createdAt: string;
  updatedAt: string;
};

export type ClientEventData = {
  type: "phone_call" | "email" | "meeting" | "other";
  message: string;
  date: string;
};
