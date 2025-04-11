export interface TableDataRow {
  id: number;
  Campaigns: string;
  Clicks: number;
  Cost: number;
  Conversions: number;
  Revenue: number;
}

export const tableData: TableDataRow[] = [
  {
    id: 1,
    Campaigns: "Cosmetics",
    Clicks: 634,
    Cost: 7325,
    Conversions: 482,
    Revenue: 3160,
  },
  {
    id: 2,
    Campaigns: "Serums",
    Clicks: 506,
    Cost: 5449,
    Conversions: 385,
    Revenue: 3669,
  },
  {
    id: 3,
    Campaigns: "Facewash",
    Clicks: 640,
    Cost: 3559,
    Conversions: 144,
    Revenue: 2117,
  },
  {
    id: 4,
    Campaigns: "Shampoos",
    Clicks: 305,
    Cost: 8172,
    Conversions: 114,
    Revenue: 1514,
  },
  {
    id: 5,
    Campaigns: "Conditioners",
    Clicks: 904,
    Cost: 1855,
    Conversions: 16,
    Revenue: 6202,
  },
  {
    id: 6,
    Campaigns: "Facewash2",
    Clicks: 431,
    Cost: 5942,
    Conversions: 210,
    Revenue: 7953,
  }  
];
