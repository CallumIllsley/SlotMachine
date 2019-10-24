//Main script for Slot Machine

//Class to handle all methods/variables related to game
class SlotMachine {
    constructor(playerName = "Player") {
        this.reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
        this.reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"] 
        this.reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
        this.playerName = playerName
        this.currentReel = []
        this.spinCounter = 0
        this.spinningCount = 0
    }

    shuffleArray(arrayToShuffle) {
        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arrayToShuffle[i];
            arrayToShuffle[i] = arrayToShuffle[j];
            arrayToShuffle[j] = temp;
        }
    }

    spin() {
        for (let i = 0; i < 10; i++) {
            console.clear()
            this.shuffleArray(this.reel1)
            this.shuffleArray(this.reel2)
            this.shuffleArray(this.reel3)
            console.log(`${this.reel1[0]} | ${this.reel2[0]} | ${this.reel3[0]}`)
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
                window.confirm(` Score is: --\nTotal Score is: --\nClick for next spin`)
                this.spinningCount = 0;
            }
        }
    }
}

const game1 = new SlotMachine()

game1.play()