  const doorToDoor = (volunteers, neighbourhoods) => {
    let volunteerLength = volunteers.length;
    let neighbourhoodsLength = neighbourhoods.length;
    let numHouses = neighbourhoodsLength / volunteerLength;
    return numHouses;
  }
