import PacManGame from '../src/pacman-core/PacManGame';
import { PacManState } from '../src/pacman-preview/PacManRenderer';
import PacMan from '../src/pacman-core/PacMan';
import { State } from '../src/pacman-core/State';
import { PacManInterface } from '../src/pacman-core/PacManInterface'
import { Direction } from '../src/pacman-core/Direction';



describe('pacman game tests', () => {

    test('pacman game return initial page without movement', () => {

        const initialPacManState: PacManState = {
            pacman: [0, 0, 'down'],
            blinky: [1, 0, 'up'],
            pinky: [2, 0, 'left'],
            inky: [3, 0, 'right'],
            clyde: [4, 0, 'up'],
            map: [5, 6,  [
                [1, 1, 1, 1, 1],
                [1, 0, 2, 0, 1],
                [1, 1, 2, 0, 1],
                [1, 0, 2, 2, 1],
                [1, 0, 0, 3, 0],
                [1, 1, 2, 2, 0]
            ]],
            lives: 3,
            points: 10,
            level: 1,
            ballCount: 6,
            ghostCount: {
                total: 4,
                blinkyCount: 1,
                pinkyCount: 2,
                inkyCount: 0,
                clydeCount: 1
            },
            state: 'regular',
            superTime: 0
        };
        
        const defaultPacmanInitialState: PacManInterface = {
            lives: 3,
            points: 0,
            level: 0,
            ballCount: 0,
            ghostCount: 0,
            state: State.regular,
            superTime: 0,
        };
        

        const pacManGame = new PacManGame(initialPacManState, new PacMan(defaultPacmanInitialState));
        const actual = pacManGame.render();

        expect(JSON.stringify(actual) === JSON.stringify(initialPacManState)).toBeTruthy();
    });

    test('pacman can move down on user tick', () => {

        const initialPacManState: PacManState = {
            pacman: [0, 0, 'down'],
            blinky: [1, 0, 'up'],
            pinky: [2, 0, 'left'],
            inky: [3, 0, 'right'],
            clyde: [4, 0, 'up'],
            map: [5, 6,  [
                [1, 1, 1, 1, 1],
                [1, 0, 2, 0, 1],
                [1, 1, 2, 0, 1],
                [1, 0, 2, 2, 1],
                [1, 0, 0, 3, 0],
                [1, 1, 2, 2, 0]
            ]],
            lives: 3,
            points: 10,
            level: 1,
            ballCount: 6,
            ghostCount: {
                total: 4,
                blinkyCount: 1,
                pinkyCount: 2,
                inkyCount: 0,
                clydeCount: 1
            },
            state: 'regular',
            superTime: 0
        };
        
        const defaultPacmanInitialState: PacManInterface = {
            lives: 3,
            points: 0,
            level: 0,
            ballCount: 0,
            ghostCount: 0,
            state: State.regular,
            superTime: 0,
        };
         
        const pacManGame = new PacManGame(initialPacManState, new PacMan(defaultPacmanInitialState));
        pacManGame.move(Direction.DOWN);
        const macManGameState = pacManGame.render();
        

        expect(macManGameState.pacman[0]).toBe(0);
        expect(macManGameState.pacman[1]).toBe(1);
    });

    test('pacman cannot move up - outside a map', () => {

        const initialPacManState: PacManState = {
            pacman: [0, 0, 'down'],
            blinky: [1, 0, 'up'],
            pinky: [2, 0, 'left'],
            inky: [3, 0, 'right'],
            clyde: [4, 0, 'up'],
            map: [5, 6,  [
                [1, 1, 1, 1, 1],
                [1, 0, 2, 0, 1],
                [1, 1, 2, 0, 1],
                [1, 0, 2, 2, 1],
                [1, 0, 0, 3, 0],
                [1, 1, 2, 2, 0]
            ]],
            lives: 3,
            points: 10,
            level: 1,
            ballCount: 6,
            ghostCount: {
                total: 4,
                blinkyCount: 1,
                pinkyCount: 2,
                inkyCount: 0,
                clydeCount: 1
            },
            state: 'regular',
            superTime: 0
        };
        
        const defaultPacmanInitialState: PacManInterface = {
            lives: 3,
            points: 0,
            level: 0,
            ballCount: 0,
            ghostCount: 0,
            state: State.regular,
            superTime: 0,
        };
        
        const pacManGame = new PacManGame(initialPacManState, new PacMan(defaultPacmanInitialState));
        pacManGame.move(Direction.UP);
        const macManGameState = pacManGame.render();

        expect(macManGameState.pacman[0]).toBe(0);
        expect(macManGameState.pacman[1]).toBe(-1);

    });

}); 

