import Ball from "./Ball";
import Super from "./Super";
import { State } from "./State";
import { Ghosts } from "./Ghosts";
import { PacManInterface } from "./PacManInterface";

export default class PacMan implements PacManInterface {

    lives: number;
    points: number;
    level: number;
    ballCount: number;
    ghostCount: number;
    state: string;
    superTime: number;

    constructor(attrs: Partial<PacManInterface> = {}) {
        this.ballCount = attrs.ballCount;
        this.state = attrs.state;
        this.level = attrs.level;
        this.lives = attrs.lives;
        this.points = attrs.points;
        this.ghostCount = attrs.ghostCount;
        this.superTime = attrs.superTime;
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

