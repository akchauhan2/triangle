export type Alive = "alive" | "dead";

export interface Dragon {
  id: number;
  health: number;
  alive: Alive;
  name: string;
}
