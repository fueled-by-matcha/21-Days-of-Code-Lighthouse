const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  unregisteredVoters = unregisteredVoters.filter(item => item !== name);
  return unregisteredVoters;
  // Remember to return a value!
}
