// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomBasePosition = Math.floor(Math.random() * 15);
      const selectedBase = dna[randomBasePosition];
      let changeBase = selectedBase;
      while(changeBase === selectedBase) {
        changeBase = returnRandBase();
      }
      console.log("Base Position at: " + randomBasePosition); // Debug
      console.log("We are changing: " + selectedBase); // Debug
      console.log("With " + changeBase); // Debug
      dna[randomBasePosition] = changeBase;

      return dna;
    }
  }
}


// Test Functions
const strand1 = pAequorFactory(1, mockUpStrand());
console.log("This is strand1: " + strand1.dna.join(" "));

const strand2 = pAequorFactory(2, mockUpStrand());
console.log("This is strand2: " + strand2.dna.join(" "));

const strand1m = strand1.mutate();
console.log("This is strand1m: " + strand1m.join(" "));







