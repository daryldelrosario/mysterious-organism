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
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      const randomBasePosition = Math.floor(Math.random() * 15);
      const selectedBase = this._dna[randomBasePosition];
      let changeBase = selectedBase;
      while(changeBase === selectedBase) {
        changeBase = returnRandBase();
      }

      console.log("...");
      console.log("..");
      console.log(".");
      console.log(`We are changing the ${selectedBase} at base ${randomBasePosition + 1} with ${changeBase}`);
      console.log(".");
      console.log("..");
      console.log("...");

      this._dna[randomBasePosition] = changeBase;
      return this._dna;
    },
    compareDNA(strand) {
      const strandLength = strand._dna.length;
      let commonPercentage = 0;
      let commonDNACounter = 0;
      for(let i = 0; i < strandLength; i++) {
        if(this._dna[i] === strand._dna[i]) {
          commonDNACounter++;
        }
      }
      commonPercentage = ((commonDNACounter / strandLength) * 100).toFixed(2);

      console.log("");
      console.log("There are " + commonDNACounter + " bases in common.");
      console.log("specimen #" + this._specimenNum + " and specimen #" + strand._specimenNum + " have " + commonPercentage + 
        "% DNA in common.");

    },
    willLikelySurvive() {
      let numC = 0;
      let numG = 0;

      this._dna.forEach(letter => {
        if(letter === "C") {
          numC++;
        } else if(letter === "G") {
          numG++;
        }
      });
      return (numC >= 9 || numG >= 9);
    }
  }
}

// HELPER FUNCTIONS
// Prints out a Header based on Header Name
const printHeader = (msg) => {
  const msgLength = msg.length;
  console.log("=".repeat(msgLength));
  console.log(msg);
  console.log("=".repeat(msgLength));
}

// Creates instances of pAequor that can survive in their natural environment
const createSurvivals = num => {
  let counter = num;
  let survivors = [];
  let specimenNum = 1;
  
  while(counter > 0) {
    let strand = pAequorFactory(specimenNum, mockUpStrand());
    specimenNum++;
    if(strand.willLikelySurvive()) {
      survivors.push(strand);
      counter--;
    }
  }

  return survivors;
}

// Test Functions
console.log("");
printHeader("=== TEST FUNCTION: Print Three(3) Strands of P.aequor DNA ==="); // Print 3 random DNA strands of length 15
const strand1 = pAequorFactory(1, mockUpStrand());
const strand2 = pAequorFactory(2, mockUpStrand());
const strand3 = pAequorFactory(3, mockUpStrand());

console.log("This is strand1: " + strand1._dna.join(" "));
console.log("This is strand2: " + strand2._dna.join(" "));
console.log("This is strand3: " + strand3._dna.join(" "));

console.log("");
printHeader("=== TEST FUNCTION: Mutates Strand 2 ==="); // Mutates one base in strand 2
console.log("Original strand2: " + strand2._dna.join(" "));
const strand2m = strand2.mutate();
console.log("Mutated strand2: " + strand2m.join(" "));

console.log("");
printHeader("=== TEST FUNCTION: Compare strand1 and strand3 ==="); // Logs the % of DNA in common
console.log("strand1: " + strand1._dna.join(" "));
console.log("strand3: " + strand3._dna.join(" "));
strand1.compareDNA(strand3);

console.log("");
printHeader("=== TEST FUNCTION: Survival ==="); // Should log true
console.log("Creating new strand4 for survival ... ");
const dna4 = ["A", "C", "G", "C", "T", "C", "C", "C", "A", "T", "C", "C", "C", "G", "C"];
const strand4 = pAequorFactory(4, dna4);
console.log("Strand4: " + strand4._dna.join(" "));
console.log("Will strand4 likely survive? ");
console.log(strand4.willLikelySurvive());

console.log("");
printHeader("=== TEST FUNCTION: Creating 30 instances of survival P.aequor DNA Strands ==="); // Should create 30 instances of survivors
const survivorArr = createSurvivals(30);

let numSurvivor = 1;
survivorArr.forEach(strand => {
  console.log(`No. ${numSurvivor} - ${strand._specimenNum}: ${strand._dna.join(" ")}`);
  numSurvivor++;
})