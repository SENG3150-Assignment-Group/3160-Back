const ticketCode;
const ticketClass;
const price;
const flightId;
  for (int i=0; i < 20; i++)
  {
    flightId = i + 1;
    for (int e = 0; e < 10; e++)
    {
      var code = [];
      ticketClass = "economy";
      price = Math.floor(Math.random() * (125 - 75)) + 75;
      code.push(
          i,
          "ECO-",
          e
      );
      ticketCode = code.join("");
      console.log(`(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`);
    }
    for (int b = 0; b < 10; b++)
    {
      var code = [];
      ticketClass = "business";
      price = Math.floor(Math.random() * (165 - 125)) + 125;
      code.push(
          i,
          "BUS-",
          b
      );
      ticketCode = code.join("");
      console.log(`(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`);
    }
    for (int f = 0; f < 10; f++)
    {
      var code = [];
      ticketClass = "firstclass";
      price = Math.floor(Math.random() * (225 - 165)) + 165;
      code.push(
          i,
          "FST-",
          f
      );
      ticketCode = code.join("");
      console.log(`(${ticketCode},${ticketClass},${price},false,false,false,false,null,null,null,,null,true,true,${flightId},null),`);
    }
  }