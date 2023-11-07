const CHARS_IN_STRING: '' = '' as const;

export const NORTH = Symbol('North');
export const SOUTH = Symbol('South');
export const EAST = Symbol('East');
export const WEST = Symbol('West');

type Direction = typeof NORTH | typeof SOUTH | typeof EAST | typeof WEST;
type Instruction = 'M' | 'L' | 'R';
type Motion = typeof MOVE | typeof TURN_LEFT | typeof TURN_RIGHT;
type Position = { x: number; y: number };
export type Rover = { direction: Direction; position: Position };

export const Position = (x: number, y: number): Position => ({ x, y });
export const Rover = (direction: Direction, position: Position): Rover => ({ direction, position });

const MOVE = Symbol('Move');
const TURN_LEFT = Symbol('Turn left');
const TURN_RIGHT = Symbol('Turn right');

const motionInstructionMap: Map<string, Motion> = new Map<Instruction, Motion>([
  ['M', MOVE],
  ['L', TURN_LEFT],
  ['R', TURN_RIGHT]
]);

const nextPositionFromDirection: Record<Direction, (position: Position) => Position> = {
  [NORTH]: ({ x, y }: Position): Position => Position(x, y + 1),
  [SOUTH]: ({ x, y }: Position): Position => Position(x, y - 1),
  [EAST]: ({ x, y }: Position): Position => Position(x + 1, y),
  [WEST]: ({ x, y }: Position): Position => Position(x - 1, y)
};

const rightMotionDirections: Record<Direction, Direction> = { [NORTH]: EAST, [EAST]: SOUTH, [SOUTH]: WEST, [WEST]: NORTH };

const leftMotionDirections: Record<Direction, Direction> = { [NORTH]: WEST, [WEST]: SOUTH, [SOUTH]: EAST, [EAST]: NORTH };

const nextRoverFromMotion: Record<Motion, (rover: Rover) => Rover> = {
  [MOVE]: ({ direction, position }: Rover): Rover => Rover(direction, nextPositionFromDirection[direction](position)),
  [TURN_RIGHT]: ({ direction, position }: Rover): Rover => Rover(rightMotionDirections[direction], position),
  [TURN_LEFT]: ({ direction, position }: Rover): Rover => Rover(leftMotionDirections[direction], position)
};

const toNextRoverState = (rover: Rover, motion: Motion): Rover => nextRoverFromMotion[motion](rover);

const onlyDefined = <T>(nullable: T | undefined): nullable is T => nullable != null;

const toMotion = (instruction: string): Motion | undefined => motionInstructionMap.get(instruction);

export const sendInstructions =
  (rover: Rover) =>
  (instructions: string): Rover =>
    instructions.split(CHARS_IN_STRING).map(toMotion).filter(onlyDefined).reduce(toNextRoverState, rover);
