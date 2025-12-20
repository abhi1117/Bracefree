import { ColumnDef } from "@tanstack/react-table";
import { Customer, Provider } from "./table-types";

export const customerColumns: ColumnDef<Customer>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "City",
    accessorKey: "city",
  },
  {
    header: "Joined",
    accessorKey: "joined",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => (
      <span
        className={`px-2 py-1 rounded text-xs ${
          getValue() === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {String(getValue())}
      </span>
    ),
  },
];

export const providerColumns: ColumnDef<Provider>[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" },
  { header: "Service", accessorKey: "service" },
  { header: "City", accessorKey: "city" },
  { header: "Rating", accessorKey: "rating" },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => (
      <span
        className={`px-2 py-1 rounded text-xs ${
          getValue() === "Approved"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {String(getValue())}
      </span>
    ),
  },
];
