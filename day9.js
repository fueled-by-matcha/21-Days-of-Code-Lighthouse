const carPassing = (cars, speed) => {
  // Code here!
  var car =({ time : Date.now(), v : speed });
  cars.push(car);
  return cars;
  
}
