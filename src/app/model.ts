export interface Cell {
  x: number;
  y: number;
  state: 'EMPTY' | 'FIRE' | 'ASH';  // État de la cellule
}


export interface Forest {
  grid: Cell[][];  // Grille de cellules représentant la forêt
  height: number;   // Hauteur de la forêt
  width: number;    // Largeur de la forêt
}
