import Super from '../src/pacman-core/Super'
import Ball from '../src/pacman-core/Ball';

test('test instances Super', () => {
    const superBall = new Super();
    expect(superBall instanceof Super).toBeTruthy();
    expect(superBall instanceof Ball).toBeTruthy();
});