import readlinesync from 'readline-sync'

export class Option {
    Text = ""
    Action = () => { }

    constructor(Text, Action) {
        this.Text = Text
        this.Action = Action
    }
}

export class Scene {
    Name = ""
    Text = ""
    Options = []

    constructor(Name, Text, Options) {
        this.Name = Name
        this.Text = Text
        this.Options = Options
    }

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