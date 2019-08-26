import { Direction } from './Direction';
import { PacManState } from '../pacman-preview/PacManRenderer';
import PacMan from './PacMan';

export default class PacManGame {

    private pacManState: PacManState;
    private pacMan: PacMan;

    constructor(pacManState: PacManState, pacMan: PacMan) {
        this.pacManState = pacManState;
        this.pacMan = pacMan;
    }

    move(direction: Direction) {
        const makeMove = {
            'down': () => {
                this.pacManState.pacman[1] += 1;
            },
            'up': () => {
                this.pacManState.pacman[1] -= 1;
            }
        }
        makeMove[direction]();
        
    }

    render(): PacManState {
        return this.pacManState;
    };
}