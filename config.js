const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1_tWT0M4g4Mv2M0Q9_HCeBojVMDYN04w_x5eNkYwmsO0/gviz/tq?tqx=out:csv&sheet=Bagalkot",
  center: [77.3507442, 12.95384778],
  zoom: 6,
  title: "Neighbourhood Dashboard",
  description:
    "Everything in your neighbourhood in one place!",
  sideBarInfo: ["ShopName", "Address", "Phone", "Tags"],
  popupInfo: ["Description"],
  filters: [
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "",
        "Others",
        "Defence Hospitals",
        "SDH/CHC"
      ],
    },
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Medical Services",
        "Population"
      ],
    },
    {
      type: "checkbox",
      title: "Tags: ",
      columnHeader: "Tags", // Case sensitive - must match spreadsheet entry
      listItems: ["Vaccination", "Need Vaccination", "Maarga", "Global Concerns India"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "District: ",
      columnHeader: "District",
      listItems: [
        "Bagalkot",
        "Bangalore Rural",
        "Bangalore"
      ],
    },
  ],
};
