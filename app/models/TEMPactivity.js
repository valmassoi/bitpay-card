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
    note: "bought some cool thing",
    date: Date.now()-(24*60*60*1000)-21165198,
    description: "Shopping/Retail",
    pending: false,
    amount: -200.891,
    balance: 1000.05-200.891
  },
  {
    id: 4,
    note: "cool stuff",
    date: Date.now(),
    description: "Bitcoin top-up",
    pending: true,
    amount: 100,
    balance: 1000.05-200.891+100//TODO
  }
]
