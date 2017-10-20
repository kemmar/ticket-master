import 'whatwg-fetch'

export default {
  findTicket(findTicketRequest) {
     findTicketRequest.ticketStore.setAll([{
       id: "c001",
       name: "Super Fun Event a",
       price: 1.53,
       count: 500,
       total: 500
     },{
       id: "c002",
       name: "Super Fun Event ab",
       price: 1.53,
       count: 500,
       total: 300
     },{
       id: "c003",
       name: "Super Fun Event abcd",
       price: 1.53,
       count: 500,
       total: 23
     },{
       id: "c004",
       name: "Super Fun Event abcdef",
       price: 1.53,
       count: 500,
       total: 1
     }].filter( v => { return v.name.toLowerCase().includes(findTicketRequest.search.toLowerCase()) }));
  }
};
