let ticketCode;
let ticketClass;
let price;
let flightId;
for (let i = 0; i < 20; i++) {
  flightId = i + 1;
  for (let e = 0; e < 10; e++) {
    let code = [];
    ticketClass = "economy";
    price = Math.floor(Math.random() * (125 - 75)) + 75;
    code.push(i, "ECO-", e);
    ticketCode = code.join("");
    console.log(
      `(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`
    );
  }
  for (let b = 0; b < 10; b++) {
    let code = [];
    ticketClass = "business";
    price = Math.floor(Math.random() * (165 - 125)) + 125;
    code.push(i, "BUS-", b);
    ticketCode = code.join("");
    console.log(
      `(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`
    );
  }
  for (let f = 0; f < 10; f++) {
    let code = [];
    ticketClass = "firstclass";
    price = Math.floor(Math.random() * (225 - 165)) + 165;
    code.push(i, "FST-", f);
    ticketCode = code.join("");
    console.log(
      `(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`
    );
  }
}
