const PAGES = {
  CALENDAR: "Calendar",
  HOURS: "Hours",
  FLOOR: "Floor",
  AVAILABILITY: "Availability",
  MAP: "Map",
};

export const TODAY_BOOKING = [PAGES.FLOOR, PAGES.AVAILABILITY, PAGES.MAP];

export const NORMAL_BOOKING = [PAGES.CALENDAR, PAGES.HOURS, ...TODAY_BOOKING];
