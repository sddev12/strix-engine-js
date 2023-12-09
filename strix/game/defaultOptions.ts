import { Action } from "../scene/scene";

/**
 * 
 * Default Options are options that are applied to every scene and accessed with a command word
 * For example you may want the option to exit the game to be available to the player at all times
 * You can create a default option with the command 'exit' that has an associated action to exit the game
 * When the player enters 'exit' on any scene, the exit default option is triggered
 * 
 */

type DefaultOptions = Map<string, Action>

export default DefaultOptions