import {SlotMachine} from "slotmachine.js"
     
gameTest = new SlotMachine

describe("shuffleArray", () => {
    it("shuffles numbers in the array", () => {
        gameTest.shuffleArray(reel1)
        expect(gameTest.reel1[0]).to.not.equal("Wild")
    })
})
