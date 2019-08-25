import { State } from "./State";

export interface PacManInterface {
 lives: number;
 points: number;
 level: number;
 ballCount: number;
 ghostCount: number;
 state: string | State;
 superTime: number;
}