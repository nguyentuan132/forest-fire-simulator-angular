export enum State {
  EMPTY = 'EMPTY',
  FIRE = 'FIRE',
  ASH = 'ASH'
}


export interface Forest {
  height: number;
  width: number;
  grid: State[][];
}
