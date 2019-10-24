
//Class to handle all methods/variables related to game
class SlotMachine {

    //Initialize variables
    constructor(inputPlayerName, inputSpinCounter) {
        this.reel1 = ["Wild  ","Star  ","Bell  ","Shell ","Seven ","Cherry","Bar   ","King  ","Queen ","Jack  "]
        this.reel2 = ["Wild  ","Star  ","Bell  ","Shell ","Seven ","Cherry","Bar   ","King  ","Queen ","Jack  "] 
        this.reel3 = ["Wild  ","Star  ","Bell  ","Shell ","Seven ","Cherry","Bar   ","King  ","Queen ","Jack  "]

        this.scores = {"Wild  " : 100, "Star  " : 90, "Bell  " : 80, "Shell " : 70, "Seven " : 60, "Cherry" : 50,
                       "Bar   " : 40, "Shell " : 30, "King  " : 20, "Queen " : 10, "Jack  " : 0}

        this.playerName = inputPlayerName
        this.currentReel = []
        this.spinCounter = inputSpinCounter
        this.spinningCount = 0
        this.currentScore = 0
        this.totalScore = 0
    }

    //Function to shuffle elements within the reels
    shuffleArray(arrayToShuffle) {
        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arrayToShuffle[i];
            arrayToShuffle[i] = arrayToShuffle[j];
            arrayToShuffle[j] = temp;
        }
    }

    displaySlots() {
        console.log(`\n
                     ________________SLOTS__________________\n
                     |   ${this.reel1[9]}   |   ${this.reel2[9]}   |   ${this.reel3[9]}   |   0\n
                     |   ${this.reel1[8]}   |   ${this.reel2[8]}   |   ${this.reel3[8]}   |  /\n
                     |   ${this.reel1[7]}   |   ${this.reel2[7]}   |   ${this.reel3[7]}   | /\n
                     |   ${this.reel1[6]}   |   ${this.reel2[6]}   |   ${this.reel3[6]}   |/\n
                     |   ${this.reel1[5]}   |   ${this.reel2[5]}   |   ${this.reel3[5]}   |\n
                     |   ${this.reel1[4]}   |   ${this.reel2[4]}   |   ${this.reel3[4]}   |\n
                     |   ${this.reel1[3]}   |   ${this.reel2[3]}   |   ${this.reel3[3]}   |\n
                     |   ${this.reel1[2]}   |   ${this.reel2[2]}   |   ${this.reel3[2]}   |\n
                     |   ${this.reel1[1]}   |   ${this.reel2[1]}   |   ${this.reel3[1]}   |\n
                     _______________________________________\n
                     |   ${this.reel1[0]}   |   ${this.reel2[0]}   |   ${this.reel3[0]}   |\n` )
    }

    //Function to set the current and total scores
    setScore() {
        this.currentScore = (this.scores[this.reel1[0]] + this.scores[this.reel2[0]] + this.scores[this.reel3[0]])
        this.totalScore = this.totalScore + this.currentScore
    }

    //Function to spin the wheels on the board
    spin() {
        [this.reel1, this.reel2, this.reel3].forEach(this.shuffleArray)
            console.clear()
            this.displaySlots() 
            this.currentReel = [this.reel1[0], this.reel2[0], this.reel3[0]]
            this.spinningCount++
    }

    pull() {
        if(this.spinCounter != 0) {
            while(this.spinningCount < 2000) { 
                this.spin() 
            }
            this.setScore()  
            this.spinCounter--
            console.log(`Score is: ${this.currentScore}\nTotal Score is: ${this.totalScore}\nSpin's remaining: ${this.spinCounter}\nCall pull() for next spin`)            
            this.spinningCount = 0
        } else { 
            console.clear()
            console.log(`Game is finished, your score is ${this.totalScore}`)
        }
    }

    //Function for main play loop
    play() {
        console.clear()
        console.log(`Welcome ${this.playerName}, ${this.spinCounter} spin's remaining\nCall the Pull method to spin!`)
        this.displaySlots()
        }
    }

//Defining new instance of game and calling the play function to start the game
console.log("How to play:\n")
console.log(`1. Create a game by typing gamename = new SlotMachine("playerName", gameCounter).`,
            " With playerName being your name and gameCounter being the amount of spins you want to play\n")
console.log("2. Call the method gamename.play() with gamename being the name you decided in step 1\n")
console.log("3. Follow on screen instructions")