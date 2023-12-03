import { Scene } from '../scene/scene.js'

export default class Game {

    Scenes = new Map()
    CurrentScene = new Scene()

    setStartScene(scene) {
        this.CurrentScene = this.Scenes.get(scene)
    }

    changeScene(scene) {
        this.CurrentScene = this.Scenes.get(scene)
    }

    addScene(scene) {
        this.Scenes.set(`${scene.Name}`, scene)
    }

    Run() {
        while (true) {
            console.clear()
            if (this.CurrentScene) {
                this.CurrentScene.Run()
            } else {
                console.log('ERROR: No scene set. Exiting Game')
                break
            }
        }
    }
}