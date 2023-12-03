import { Scene, Option } from '../strix'
import { game } from '../game'

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