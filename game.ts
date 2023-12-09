import Game from './strix'
import { mainMenu } from './scenes/mainMenu'
import { fortEntrance } from './scenes/fortEntrance'

// This is the entrypoint for the game

function exitGame(): void {
    process.exit(0)
}

// Here you instanciate a new game object
// It is exported so that scenes can access the game object
export const game = new Game()

game.addDefaultOption('exit', exitGame)
console.log(game.defaultOptions)

// Add your scenes to the game object
game.addScene(mainMenu)
game.addScene(fortEntrance)

// Define your starting scene, the very first scene that runs
game.setStartScene('Fort Reyark')

// Run the game loop
game.Run()