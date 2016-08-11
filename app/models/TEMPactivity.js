module.exports = [//HACK move to backend and in a service
  {
    id: 1,
    note: "testing this out",
    date: Date.now()-(2*24*60*60*1000)-31185198,
    description: "Bitcoin top-up",
    pending: false,
    amount: .05,
    balance: .05//calculated on backend at moment of dep/deb
  },
  {
    id: 2,
    note: null,
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Bitcoin top-up",
    pending: false,
    amount: 1000,
    balance: 1000.05
  },
  {
    id: 3,
    note: "flight to san fran",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Airlines",
    pending: false,
    amount: -95.99,
    balance: 904.06
  },
  {
    id: 4,
    note: null,
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Bar/Restaurant",
    pending: false,
    amount: -22.29,
    balance: 881.77
  },
  {
    id: 5,
    note: null,
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Grocery Store",
    pending: false,
    amount: -45.11,
    balance: 836.66
  },
  {
    id: 6,
    note: "new clothes",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Shopping/Retail",
    pending: false,
    amount: -85,
    balance: 751.66
  },
  {
    id: 7,
    note: "returned clothes, didnt fit",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Shopping/Retail",
    pending: false,
    amount: 85,
    balance: 836.66
  },
  {
    id: 8,
    note: null,
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Gas Station",
    pending: false,
    amount: -37,
    balance: 799.66
  },
  {
    id: 9,
    note: "gotta eat",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Restaurant",
    pending: false,
    amount: -23,
    balance: 776.66
  },
  {
    id: 10,
    note: "bought some cool thing",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Shopping/Retail",
    pending: false,
    amount: -200.89,
    balance: 575.77
  },
  {
    id: 11,
    note: "birthday money",
    date: Date.now(),
    description: "Bitcoin top-up",
    pending: true,
    amount: 100,
    balance: 675.77//TODO
  }
]
