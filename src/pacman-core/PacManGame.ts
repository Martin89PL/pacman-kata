import { Direction } from './Direction';
import { PacManState } from '~pacman-preview/PacManRenderer';

export default class PacManGame {

    private pacManState: PacManState;

    constructor(pacManState: PacManState) {
        this.pacManState = pacManState;
    }


    render(): PacManState {
        return this.pacManState;
    };
}