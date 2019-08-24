import PacMan from '../src/pacman-core/PacMan';
import Super from '../src/pacman-core/Super';
import { Ghosts } from '../src/pacman-core/Ghosts';
import { State } from '../src/pacman-core/State';


test('test ballCount after eatBall by Pacman', () => {
    const pacman = new PacMan();
    pacman.eatBall(new Super());
    expect(1).toEqual(pacman.getBallCount())
});

test('test points after eatBall by Pacman', () => {
    const pacman = new PacMan();
    pacman.eatBall(new Super());
    expect(pacman.getPoints()).toEqual(1)
});

test('test increase level when Pacman eat 40 balls', () => {
    const pacman = new PacMan(39);
    pacman.eatBall(new Super());
    expect(pacman.getLevel()).toEqual(1);
});

test('test reset ballCount when Pacman eat 40 balls', () => {
    const pacman = new PacMan(39);
    pacman.eatBall(new Super());
    expect(pacman.getBallCount()).toEqual(0);
});

test('if eating Ball is type Super state of Pacman should be super', () => {
    const pacman = new PacMan();
    pacman.eatBall(new Super());
    expect(pacman.getState()).toBe('super');
});

test('if eating Ball is type Super super time of Pacman should be equals 10', () => {
    const pacman = new PacMan();
    pacman.eatBall(new Super());
    expect(pacman.getSuperTime()).toEqual(10);
});

test('Pacman super time should be decreased by one when tick', () => {
    const pacman = new PacMan(39);
    pacman.eatBall(new Super());
    pacman.tick()
    expect(pacman.getSuperTime()).toEqual(9);
});

test('Pacman super should change to regular when super time is zero', () => {
    const pacman = new PacMan(39);
    pacman.eatBall(new Super());
    pacman.tick()
    for (let i = 0; i <9; i++) {pacman.tick()}
    expect(pacman.getSuperTime()).toEqual(0);
});

test('Pacman eat ghost when has super state', () => {
    const pacman = new PacMan(0, State.super);
    pacman.eatGhost(Ghosts.Blinky);
    expect(pacman.getPoints()).toEqual(10);
});

test('Pacman eat ghost when has regular state', () => {
    const pacman = new PacMan();
    pacman.eatGhost(Ghosts.Blinky);
    expect(pacman.getLives()).toEqual(2);
});

test('Pacman reset lives when eating ghost without lives', () => {
    const pacman = new PacMan(39, State.regular, 1, 1);
    pacman.eatGhost(Ghosts.Blinky);
    expect(pacman.getPoints()).toEqual(0);
});

test('Pacman eat ghost when has regular state', () => {
    const pacman = new PacMan();
    pacman.eatGhost(Ghosts.Blinky);
    expect(pacman.getGhosts()).toEqual(1);
});

