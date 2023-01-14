# Studying the Mysterious Organism: P. Aequor
Challenge project to create objects that simulate the DNA of P. aequor for research team to study

## Code Demo
<kbd><img src="code-demo.gif" alt="mysterious organism code demo gif"></kbd>

## Instructions
* this code demo uses Node.js
* ran via terminal through command `node main.js` 

## Features
* includes factory function pAequorFactory(`specimenNum, dna`) that produces `pAequorObj`s
* `pAequorObj` created via pAequorFactory include functions:
    * mutate()
    * compareDNA(`anotherPAequorObj`)
    * willLikelySurvive()
    * EXTENSION CHALLENGE: complementStrand()
* includes helper function:
    * createSurvivals(`num`) 
        * takes in a number of specimens required
        * creates an array of surviving pAequor specimens
* completes extension challenges via function:
    * mostRelated(`dnaStrandArr`)
        * takes in an array of `pAequorObj`s
        * returns specimen numbers and percentage of most related survivors
        * able to print full comparison report if un-comment the comment block in the hardcode function
* all functions tested and passed