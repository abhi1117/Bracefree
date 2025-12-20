export const StatsDummy = {
  totalBookings: 8492,
  pendingProviders: 2847,
  activeCustomers: 15234,
  totalRevenue: 342891,
  activeDisputes: 15,
};

export const LineData = {
  bookings: [
    { month: "JAN", value: 20 },
    { month: "FEB", value: 35 },
    { month: "MAR", value: 50 },
    { month: "APR", value: 30 },
    { month: "MAY", value: 55 },
    { month: "JUN", value: 40 },
    { month: "JUL", value: 65 },
    { month: "AUG", value: 45 },
    { month: "SEP", value: 60 },
    { month: "OCT", value: 48 },
    { month: "NOV", value: 50 },
    { month: "DEC", value: 70 },
  ],

  customers: [
    { month: "JAN", value: 120 },
    { month: "FEB", value: 135 },
    { month: "MAR", value: 160 },
    { month: "APR", value: 150 },
    { month: "MAY", value: 190 },
    { month: "JUN", value: 170 },
    { month: "JUL", value: 210 },
    { month: "AUG", value: 180 },
    { month: "SEP", value: 200 },
    { month: "OCT", value: 190 },
    { month: "NOV", value: 210 },
    { month: "DEC", value: 150 },
  ],
};

export const PieData = [
  { name: "Cleaning", value: 25 },
  { name: "HVAC", value: 15 },
  { name: "Plumbing", value: 20 },
  { name: "Handyman", value: 10 },
  { name: "Electrical", value: 30 },
];

export const BarData = [
  { city: "New York", value: 100 },
  { city: "Los Angeles", value: 70 },
  { city: "Chicago", value: 100 },
  { city: "Houston", value: 86 },
  { city: "Phoenix", value: 100 },
];

export const ActivityDummy = [
  {
    message: "New provider registered: Mike Plumber",
    time: "2 min ago",
  },
  {
    message: "New booking created: #8492 - HVAC Service",
    time: "15 min ago",
  },
  {
    message: "Booking cancelled: #8491",
    time: "32 min ago",
  },
  {
    message: "Provider verified: Sarah Electrician",
    time: "1 hour ago",
  },
  {
    message: "New dispute raised for booking #8485",
    time: "2 hours ago",
  },
];
