import { describe, expect, it } from 'vitest';
import { EAST, NORTH, Position, Rover, sendInstructions, SOUTH, WEST } from './index';

describe('rover kata', (): void => {
  it('should move forward', (): void => {
    const rover: Rover = Rover(NORTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('M');

    expect(nextRover).toStrictEqual<Rover>(Rover(NORTH, Position(5, 6)));
  });

  it('should move forward 2 times', (): void => {
    const rover: Rover = Rover(NORTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('MM');

    expect(nextRover).toStrictEqual<Rover>(Rover(NORTH, Position(5, 7)));
  });

  it('should turn right and face east', (): void => {
    const rover: Rover = Rover(NORTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('R');

    expect(nextRover).toStrictEqual<Rover>(Rover(EAST, Position(5, 5)));
  });

  it('should turn Left and face east', (): void => {
    const rover: Rover = Rover(NORTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('L');

    expect(nextRover).toStrictEqual<Rover>(Rover(WEST, Position(5, 5)));
  });

  it('should not move when there is a wrong instruction', (): void => {
    const rover: Rover = Rover(SOUTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('Z');

    expect(nextRover).toStrictEqual<Rover>(Rover(SOUTH, Position(5, 5)));
  });

  it('should turn 2 times to the Left', (): void => {
    const rover: Rover = Rover(SOUTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('LL');

    expect(nextRover).toStrictEqual<Rover>(Rover(NORTH, Position(5, 5)));
  });

  it('should turn 2 times to the right', (): void => {
    const rover: Rover = Rover(SOUTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('RR');

    expect(nextRover).toStrictEqual<Rover>(Rover(NORTH, Position(5, 5)));
  });

  it('should turn right, move 2 times and turn left', (): void => {
    const rover: Rover = Rover(SOUTH, Position(5, 5));

    const nextRover: Rover = sendInstructions(rover)('RMML');

    expect(nextRover).toStrictEqual<Rover>(Rover(SOUTH, Position(3, 5)));
  });
});
