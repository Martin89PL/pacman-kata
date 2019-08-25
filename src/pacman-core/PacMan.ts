import Ball from "./Ball";
import Super from "./Super";
import { State } from "./State";
import { Ghosts } from "./Ghosts";
import { PacManInterface } from "./PacManInterface";
import DirectionInterface from "./DirectionInterface";

export default class PacMan {

    private lives: number;
    private points: number;
    private level: number;
    private ballCount: number;
    private state: string;
    private superTime: number;
    private ghosts: Map<string, number>;
    private direction: DirectionInterface;

    constructor(attrs: Partial<PacManInterface> = {}) {
        this.ballCount = attrs.ballCount;
        this.state = attrs.state;
        this.level = attrs.level;
        this.lives = attrs.lives;
        this.points = attrs.points;
        this.superTime = attrs.superTime;
        this.ghosts = new Map();
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

    eatGhost(ghost: Ghosts) {

        if (this.state === State.super) {
            this.points += 10;
        }

        if (this.lives > 0) {
            this.lives--;
        }

        if (this.lives === 0) {
            this.points = 0;
        }

 
        this.ghosts.set(ghost, (this.ghosts.get(ghost)) ? this.ghosts.get(ghost) + 1 : 1);

    }

    ghostCount() {
        return this.ghosts;
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
}

