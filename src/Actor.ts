import { vec } from '@basementuniverse/vec';
import { GameScene } from './GameScene';
import { Bounds } from './types';

export default abstract class Actor {
  public position: vec;
  public disposed: boolean;

  public abstract update(dt: number, game: GameScene, bounds: Bounds, ...args: any[]): void;

  public abstract draw(context: CanvasRenderingContext2D, ...args: any[]): void;
}
