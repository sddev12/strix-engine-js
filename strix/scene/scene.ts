import readlinesync from 'readline-sync'
import { game } from '../../game';

// An Action is a custom function to handle the logic that is triggered
// when the user chooses it's associated Option
export type Action = () => void

// options are attached to a scene. They have a text property and an action function
// which defines the action associated with the option
export class Option {
    text: string;
    action: Action;

    constructor(text: string, action: Action) {
        this.text = text
        this.action = action
    }
}

// Scenes are the building blocks of the game
// The user creates scenes with options and actions
export class Scene {
    // name of the scene
    name: string

    // text to be displated to the player when the scence runs
    text: string

    // List of options the player can select in the scene
    options: Option[]

    constructor(
        name: string, 
        text: string, 
        options: Option[],
    ) {
        this.name = name
        this.text = text
        this.options = options
    }

    private printBanner() {
        let bannerEdge = "=".repeat(this.name.length + 6)
        let bannerPading = " ".repeat(Math.floor((bannerEdge.length / 2) - Math.floor(this.name.length / 2)))

        console.log(`
            ${bannerEdge}
            ${bannerPading}${this.name.toUpperCase()}
            ${bannerEdge}
        `)
    }

    // Runs the scene, waits for the player to choose an option
    // then triggers the realted action
    Run() {
        this.printBanner()
        console.log(`${this.text}\n`)

        this.options.forEach((option, index) => {
            console.log(`${index + 1}: ${option.text}`)
        })

        const choice = readlinesync.question('\nChoose wisely: \n')
        if (game.defaultOptions?.get(choice) != undefined) {
            game.defaultOptions?.get(choice)!();
        }
        const intChoice = parseInt(choice)
        if (intChoice >= 1 && intChoice <= this.options.length) {
            this.options[intChoice - 1].action()
        }
    }
}