import PacMan from '../src/pacman-core/PacMan';
import Super from '../src/pacman-core/Super';
import { Ghosts } from '../src/pacman-core/Ghosts';
import { State } from '../src/pacman-core/State';
import { PacManInterface } from '../src/pacman-core/PacManInterface';


describe('pacman tests', () => {

    const defaultPacmanInitialState: PacManInterface = {
        lives: 3,
        points: 0,
        level: 0,
        ballCount: 0,
        ghostCount: 0,
        state: State.regular,
        superTime: 0,
    };

    let pacman = null;

    beforeEach(() =>{
        pacman = new PacMan(defaultPacmanInitialState);
    });

    test('test ballCount after eatBall by Pacman', () => {
        pacman.eatBall(new Super());
        expect(1).toEqual(pacman.getBallCount())
    });
    
    test('test points after eatBall by Pacman', () => {
        pacman.eatBall(new Super());
        expect(pacman.getPoints()).toEqual(1)
    });
    
    test('test increase level when Pacman eat 40 balls', () => {

        defaultPacmanInitialState.ballCount = 39;
    
        pacman = new PacMan(defaultPacmanInitialState);
        pacman.eatBall(new Super());
        expect(pacman.getLevel()).toEqual(1);
    });
    
    test('test reset ballCount when Pacman eat 40 balls', () => {
        defaultPacmanInitialState.ballCount = 39;
        
        pacman = new PacMan(defaultPacmanInitialState);
        pacman.eatBall(new Super());

        expect(pacman.getBallCount()).toEqual(0);
    });
    
    test('if eating Ball is type Super state of Pacman should be super', () => {
        pacman.eatBall(new Super());

        expect(pacman.getState()).toBe('super');
    });
    
    test('if eating Ball is type Super super time of Pacman should be equals 10', () => {
        pacman.eatBall(new Super());

        expect(pacman.getSuperTime()).toEqual(10);
    });
    
    test('Pacman super time should be decreased by one when tick', () => {
        pacman.eatBall(new Super());
        pacman.tick()

        expect(pacman.getSuperTime()).toEqual(9);
    });
    
    test('Pacman super should change to regular when super time is zero', () => {
        pacman.eatBall(new Super());
        pacman.tick()
        for (let i = 0; i < 9; i++) { pacman.tick() }

        expect(pacman.getSuperTime()).toEqual(0);
    });
    
    test('Pacman eat ghost when has super state', () => {
        defaultPacmanInitialState.state = State.super;    
        const pacman = new PacMan(defaultPacmanInitialState);
        pacman.eatGhost(Ghosts.Blinky);

        expect(pacman.getPoints()).toEqual(10);
    });
    
    test('Pacman eat ghost when has regular state', () => {
        pacman.eatGhost(Ghosts.Blinky);
        expect(pacman.getLives()).toEqual(2);
    });
    
    test('Pacman reset lives when eating ghost without lives', () => {
        defaultPacmanInitialState.ballCount = 39;
        defaultPacmanInitialState.lives = 1;
    
        const pacman = new PacMan(defaultPacmanInitialState);
        pacman.eatGhost(Ghosts.Blinky);
        expect(pacman.getPoints()).toEqual(0);
    });
    
    test('Pacman eat ghost when has regular state', () => {
        pacman.eatGhost(Ghosts.Blinky);
        expect(pacman.ghostCount().get(Ghosts.Blinky)).toEqual(1);
    });

    test('Pacman eat a few ghosts and has statistics about them', () => {
        pacman.eatGhost(Ghosts.Blinky);
        pacman.eatGhost(Ghosts.Blinky);
        expect(pacman.ghostCount().get(Ghosts.Blinky)).toEqual(2);
    });

    test('Pacman eats few different ghosts', () => {
        pacman.eatGhost(Ghosts.Blinky);
        pacman.eatGhost(Ghosts.Clyde);
        pacman.eatGhost(Ghosts.Inky);
        pacman.eatGhost(Ghosts.Pinky);
        pacman.eatGhost(Ghosts.Inky);

        expect(pacman.ghostCount().get(Ghosts.Blinky)).toEqual(1);
        expect(pacman.ghostCount().get(Ghosts.Clyde)).toEqual(1);
        expect(pacman.ghostCount().get(Ghosts.Inky)).toEqual(2);
        expect(pacman.ghostCount().get(Ghosts.Pinky)).toEqual(1);

    })

  });
