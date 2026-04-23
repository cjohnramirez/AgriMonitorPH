export const MARKET_DATA = {
  status: "11 prices increased",
  commodities: [
    { title: "Rice, well-milled", price: 56.40, unit: "PHP/kg", change: "+6.1%", trend: "up", desc: "Premium yield driving irrigated paddy land usage." },
    { title: "Rice, regular milled", price: 50.20, unit: "PHP/kg", change: "+4.8%", trend: "up", desc: "Baseline harvest dictating seasonal labor cycles." },
    { title: "White corn (shelled)", price: 88.00, unit: "PHP/kg", change: "No change", trend: "flat", desc: "Drought-tolerant cereal, for upland crops." },
    { title: "Yellow corn (shelled)", price: 21.80, unit: "PHP/kg", change: "-2.2%", trend: "down", desc: "Crop driving the livestock feed industry." }
  ],
  exchanges: [
    { title: "Brent Crude Oil Continuous Contract", code: "BRNOO", price: 90.82, unit: "USD", change: "+10.25 since a week ago", desc: "A regional benchmark for refined diesel, serving as the price basis for Philippine farm fuel." },
    { title: "Dubai Crude Oil (Platts) Financial Futures", code: "DBLc1", price: 104.93, unit: "USD", change: "+12.90 since a week ago", desc: "Middle East benchmark that sets the raw material cost for local refineries producing agricultural fuels." },
    { title: "Singapore Gasoil Futures (MOPS Approx.)", code: "SG811", price: 191.671, unit: "USD", change: "+6.70 since a week ago", desc: "A regional benchmark for refined diesel, serving as the price basis for Philippine farm fuel and transport costs." },
    { title: "USD to PHP", code: "PHP=", price: 59.70, unit: "PHP", change: "Price of 1 USD, when converted to PHP", desc: "Dictates the literal price Filipinos pay for all the dollar-denominated fuel and fertilizers." }
  ],
  fertilizers: [
    { title: "Urea 46-0-0", price: 2980.00, unit: "PHP/50kg", change: "+150 vs. last month", desc: "Nitrogen-based, almost 100% imported. Strongly correlates with USD/PHP exchange." },
    { title: "Ammosul 21-0-0", price: 1420.00, unit: "PHP/50kg", change: "No change", desc: "Common input for corn and vegetable production. Less volatile than Urea." }
  ]
};

export const SUPPLY_CHAIN_DATA = {
  bufferStock: {
    total: "847,200",
    days: 48,
    regions: [
      { name: "Luzon", amount: "465,000", pct: 55 },
      { name: "Visayas", amount: "211,800", pct: 25 },
      { name: "Mindanao", amount: "211,800", pct: 20 }
    ]
  },
  topProducers: [
    { rank: "Top 1", region: "Isabela (Region II)", amount: "1,380,000", pct: "16.2%" },
    { rank: "Top 2", region: "Nueva Ecija (Region III)", amount: "1,210,000", pct: "14.2%" },
    { rank: "Top 3", region: "North Cotabato (XII)", amount: "1,050,000", pct: "12.3%" },
    { rank: "Top 4", region: "Pangasinan (Region I)", amount: "820,000", pct: "9.6%" }
  ],
  lossRates: [
    { label: "Palay (farm to mill)", value: 16.0 },
    { label: "Corn (farm to market)", value: 14.5 },
    { label: "Onion specifically", value: 40.0 },
    { label: "Vegetables (avg)", value: 35.0 }
  ]
};

export const OUTLOOK_DATA = {
  climate: {
    enso: "La Niña Watch",
    ensoStatus: "Elevated flood risk",
    weather: { city: "Cagayan de Oro City, Misamis Oriental", temp: "24°C", precip: "10%", humidity: "59%", wind: "3 km/h" },
    rainfall: "Below normal"
  },
  forecasts: [
    { label: "Palay volume forecast", value: "4.92M", change: "-3.1% vs. same qtr last yr", trend: "down" },
    { label: "Corn volume forecast", value: "2.38M", change: "Near flat YoY", trend: "flat" },
    { label: "High-value veg forecast", value: "4.92M", change: "-5.8% (El Niño carry-over)", trend: "down" }
  ],
  indicators: [
    { label: "Rice self-sufficiency ratio", value: "83.4%", sub: "Imports fill 16.6% of demand" },
    { label: "Corn self-sufficiency ratio", value: "77.2%", sub: "Near flat YoY" },
    { label: "Hunger incidence rate", value: "8.1%", sub: "-0.4pp vs. last survey", trend: "down" },
    { label: "Food inflation rate", value: "5.8%", sub: "Up from 4.9% prior month", trend: "up" }
  ]
};