import readlinesync from 'readline-sync'

// Options are attached to a scene. They have a text property and an action function
// which defines the action associated with the option
export class Option {
    Text = ""
    Action = () => { }

    constructor(Text, Action) {
        this.Text = Text
        this.Action = Action
    }
}

// Scenes are the building blocks of the game
// The user creates scenes with options and actions
export class Scene {
    // Name of the scene
    Name = ""

    // Text to be displated to the player when the scence runs
    Text = ""

    // List of options the player can select in the scene
    Options = []

    constructor(Name, Text, Options) {
        this.Name = Name
        this.Text = Text
        this.Options = Options
    }

    // Runs the scene, waits for the player to choose an option
    // then triggers the realted action
    Run() {
        console.log(`=== ${this.Name} ===\n`)
        console.log(`${this.Text}\n`)

        this.Options.forEach((option, index) => {
            console.log(`${index + 1}: ${option.Text}\n`)
        })

        const choice = readlinesync.question('Choose wisely: \n')
        const intChoice = parseInt(choice)
        if (intChoice >= 1 && intChoice <= this.Options.length) {
            this.Options[choice - 1].Action()
        }
    }
}