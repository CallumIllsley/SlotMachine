//Main script for Slot Machine

//Class to handle all methods/variables related to game
class SlotMachine {
    constructor(playerName = "Player") {
        this.reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
        this.reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"] 
        this.reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]

        this.scores = {"Wild" : 100, "Star" : 90, "Bell" : 80, "Shell" : 70, "Seven" : 60, "Cherry" : 50,
                       "Bar" : 40, "Shell" : 30, "King" : 20, "Queen" : 10, "Jack" : 0}

        this.playerName = playerName
        this.currentReel = []
        this.spinCounter = 0
        this.spinningCount = 0
        this.currentScore = 0
        this.totalScore = 0
    }

    shuffleArray(arrayToShuffle) {
        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arrayToShuffle[i];
            arrayToShuffle[i] = arrayToShuffle[j];
            arrayToShuffle[j] = temp;
        }
    }

    setScore() {
        this.currentScore = (this.scores[this.reel1[0]] + this.scores[this.reel2[0]] + this.scores[this.reel3[0]])
        this.totalScore = this.totalScore + this.currentScore
    }

    spin() {
        for (let i = 0; i < 10; i++) {
            [this.reel1, this.reel2, this.reel3].forEach(this.shuffleArray)
            console.clear()
            console.log(`${this.reel1[0]} | ${this.reel2[0]} | ${this.reel3[0]}`)
            this.currentReel = [this.reel1[0], this.reel2[0], this.reel3[0]]
            this.spinningCount++
        }
    }

    play() {
        this.spinCounter = prompt(`Welcome ${this.playername}, how many games did you want to play?`)
        if(this.spinCounter <= 0 || this.spinCounter > 9) {
            this.spinCounter = prompt(`Pick between 1 & 9`)
        } else {
            for(let i = 0; i < this.spinCounter; i++) {
                while(this.spinningCount < 750) {
                    setInterval(this.spin(), 2500)
                } 
                this.setScore()
                window.alert(` Score is: ${this.currentScore}\nTotal Score is: ${this.totalScore}\nClick for next spin`)
                this.spinningCount = 0;
            }
            window.alert(`Game over, your score is ${this.totalScore}`)
        }
    }
}

const game1 = new SlotMachine()

game1.play()