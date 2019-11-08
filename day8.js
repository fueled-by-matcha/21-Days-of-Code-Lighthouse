const smartGarbage = (trash, bins) => {
    if (trash === "waste"){
      bins['waste']+=1;
    }
    if (trash === "recycling"){
      bins['recycling']+=1;
    }
    if(trash === "compost"){
      bins['compost']+=1;
    }
    return bins;
}
