export interface ToggleTableDataRow {
  id: number;
  Group: string;
  Clicks: number;
  Cost: number;
  Conversions: number;
  Revenue: number;
}

export const toggleTableData: ToggleTableDataRow[] = [
  {
    id: 1,
    Group: "Male",
    Clicks: 634,
    Cost: 7325,
    Conversions: 482,
    Revenue: 3160,
  },
  {
    id: 2,
    Group: "Serums",
    Clicks: 506,
    Cost: 5449,
    Conversions: 385,
    Revenue: 3669,
  },
  {
    id: 3,
    Group: "Facewash",
    Clicks: 640,
    Cost: 3559,
    Conversions: 144,
    Revenue: 2117,
  },
];
