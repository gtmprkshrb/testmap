const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1NWpae4UxuLyMKLVzD-O4QSvgoA1DUbMzcNVE6pIrBmY/gviz/tq?tqx=out:csv&sheet=Bagalkot",
  center: [77.5905634, 12.9244925],
  zoom: 10,
  title: "City Dashboard",
  description:
    "Everything in your neighbourhood in one place for the city of Bengaluru! See https://datastudio.google.com/u/2/reporting/2ae63abd-95d5-47ac-ae95-00c705562a6a/page/9xETC for ward level analysis",
  sideBarInfo: ["ShopName", "Description"],
  popupInfo: ["ShopName"],
  filters: [

    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Govt Services",
        "Environment-Civic Data"
      ],
    },
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "Others",
        "Defence Hospitals",
        "SDH/CHC",
        "Corporators",
        "MLA",
        "Waste",
        "Citizen Services",
        "Electricity",
        "Campaigns",
        "Issue Reported",
        "PHCs",
        "Volunteers",
        "AQM",
        "Recharge Well",
        "Streetlight Intensity"
      ],
    }
  ],
};
