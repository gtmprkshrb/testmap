const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1NWpae4UxuLyMKLVzD-O4QSvgoA1DUbMzcNVE6pIrBmY/gviz/tq?tqx=out:csv&sheet=Bagalkot",
  center: [77.5905634, 12.9244925],
  zoom: 12,
  title: "City Dashboard",
  description:
    "Everything in your neighbourhood in one place for the city of Bengaluru!",
  sideBarInfo: ["ShopName", "Pincode", "Description", "Tags"],
  popupInfo: ["ShopName"],
  filters: [
    
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Local Governance",
        "Help Locations",
        "Citizen Initiatives"
      ],
    },
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "Corporators",
        "MLA",
        "Waste - BioMethanisationUnit",
        "Waste - DryWasteCollectionCentre",
        "Waste",
        "Citizen Services",
        "Electricity",
        "Campaigns",
        "Issue Reported"
      ],
    }
    // {
    //   type: "checkbox",
    //   title: "Tags: ",
    //   columnHeader: "Tags", // Case sensitive - must match spreadsheet entry
    //   listItems: ["Corporator", "Need Vaccination", "Maarga", "Global Concerns India"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    // },
    // {
    //   type: "dropdown",
    //   title: "District: ",
    //   columnHeader: "District",
    //   listItems: [
    //     "Bagalkot",
    //     "Bangalore Rural",
    //     "Bangalore"
    //   ],
    // },
  ],
};
