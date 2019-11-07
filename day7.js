const termTopics = (interviews) => {
  // Code here!
  let mentions = [0,0,0];
  for(let i = 0; i< interviews.length; i++){
    if(interviews[i] === "smart city"){
      mentions[0] += 1;
    }
    if(interviews[i] === "arts funding"){
      mentions[1] += 1;
    }
    if(interviews[i] === "transportation"){
      mentions[2] += 1;
    }
  }
  return mentions;
  // Remember to return an array!
}
