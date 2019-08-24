import Ball from "./Ball";
import Super from "./Super";
import { State } from "./State";
import { Ghosts } from "./Ghosts";

export default class PacMan {

    private lives: number = 3;
    private points: number = 0;
    private level: number = 0;
    private ballCount: number = 0;
    private ghostCount: number = 0;
    private state: string | State = State.regular;
    private superTime: number = 0;

    constructor(ballCount: number = 0, state: State = State.regular, lives: number = 3, points: number = 0) {
        this.ballCount = ballCount;
        this.state = state;
        this.lives = lives;
        this.points = points;
    }

    tick() {
       if (this.state === State.super) {
           this.superTime--;
       }
    }

    eatBall(ball: Ball) {

        this.ballCount++;
        this.points++;

        if (this.ballCount === 40) {
            this.level++;
            this.ballCount = 0;
        }

        if (ball instanceof Super) {
            this.state = State.super;
            this.superTime = 10;
        }
        
    }

    eatGhost(ghostName: Ghosts) {

        if (this.state === State.super) {
            this.points += 10;
        }

        if (this.lives > 0) {
            this.lives--;
        }

        if (this.lives === 0) {
            this.points = 0;
        }

        this.ghostCount++;

    }

    

    getPoints(): number {
        return this.points;
    }
    getBallCount(): number {
        return this.ballCount;
    }
    getLevel(): number {
        return this.level;
    }
    getState(): string {
        return this.state;
    }
    getSuperTime(): number {
        return this.superTime;
    }
    getLives(): number {
        return this.lives;
    }
    getGhosts(): number {
        return this.ghostCount;
    }
}

