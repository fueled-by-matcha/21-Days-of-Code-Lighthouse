const whereCanIPark = (spots, vehicle) => {
  for(let i = 0; i<spots.length; i++){
    for(let j = 0; j<spots.length; j++){
      if(vehicle === "regular" && spots[i][j] === "R"){
        spots[i][j] = null;
        return [j,i];
      }
      else if(vehicle === "small" && (spots[i][j] === "R" || spots[i][j] === "S" )){
        spots[i][j] = null;
        return[j,i];
      }
      else if(vehicle === "motorcycle" && (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")){
        spots[i][j] = null;
        return [j,i];
      }
    }
  }
  return false;
}
