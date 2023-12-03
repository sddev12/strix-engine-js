import { Scene, Option } from '../engine/scene/scene.js'
import { game } from '../game.js'

export const mainMenu = new Scene(
    'Main Menu', 
    'Welcome to Fort Reyard. Prepare to be tested', 
    [
        new Option(
            "Stat Game",
            () => {
                game.changeScene('Fort Entrance')   
            }
        )
    ])