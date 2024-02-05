import { ClientData } from "@/types";

export const clientList: ClientData[] = [
  {
    id: "1",
    name: "John Doe",
    addedSource: "dealer",
    addedCause: "leaseExpiring",
    events: [
      {
        type: "phone_call",
        message: "Left a message",
        date: "2020-01-01T12:00:00Z",
      },
    ],
    email: "john@email.com",
    phone: "123456789",
    estimatedSalary: 1000,
    age: 30,
    familyMembers: 3,
    address: "123 Main St",
    createdAt: "2020-01-01T12:00:00Z",
    updatedAt: "2020-01-01T12:00:00Z",
  },
  {
    id: "2",
    name: "Jane Doe",
    addedSource: "api",
    addedCause: "newCar",
    events: [
      {
        type: "email",
        message: "Sent an email",
        date: "2020-01-01T12:00:00Z",
      },
    ],
    email: "jane@email.com",
    phone: "987654321",
    estimatedSalary: 2000,
    createdAt: "2020-01-01T12:00:00Z",
    updatedAt: "2020-01-01T12:00:00Z",
  },
];
