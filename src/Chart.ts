import { vec } from '@basementuniverse/vec';
import { CameraBounds } from '@basementuniverse/camera';
import { SimplexNoise } from 'ts-perlin-simplex';
import Game from './Game';
import Actor from './Actor';

export default class Chart extends Actor {
  private readonly AVG_COLOUR = 'rgba(64, 128, 255, 0.6)';
  private readonly MIN_COLOUR = 'rgba(255, 0, 0, 0.8)';
  private readonly MAX_COLOUR = 'rgba(255, 128, 0, 0.8)';
  private readonly STROKE = 2;
  private readonly SIZE = 50;

  private readonly MIN_SCALE_X = 0.003;
  private readonly MIN_SCALE_Y = 0.2;
  private readonly MIN_OFFSET = 0.75;

  private readonly MAX_SCALE_X = 0.003;
  private readonly MAX_SCALE_Y = 0.7;

  private readonly AVG_SCALE_X = 0.005;
  private readonly AVG_SCALE_Y = 0.3;
  private readonly AVG_OFFSET = 0.15;

  private simplex: SimplexNoise;

  public constructor() {
    super();

    this.simplex = new SimplexNoise();
  }

  public update() {}

  public draw(context: CanvasRenderingContext2D, bounds: CameraBounds) {
    context.save();
    context.lineWidth = this.STROKE;

    const left = Math.floor(bounds.left / this.SIZE);
    const right = Math.ceil(bounds.right / this.SIZE);

    const min: number[] = [];
    const max: number[] = [];
    const avg: number[] = [];

    for (let x = left; x <= right; x++) {
      const current = this.f(x * this.SIZE);
      min.push(current.min);
      max.push(current.max);
      avg.push(current.avg);
    }

    // Min line
    context.strokeStyle = this.MIN_COLOUR;
    context.setLineDash([]);
    context.beginPath();
    context.moveTo(left * this.SIZE, min[0]);

    for (let i = 1; i < min.length; i++) {
      context.lineTo((left + i) * this.SIZE, min[i]);
    }

    context.stroke();
    context.closePath();

    // Max line
    context.strokeStyle = this.MAX_COLOUR;
    context.beginPath();
    context.moveTo(left * this.SIZE, max[0]);

    for (let i = 1; i < max.length; i++) {
      context.lineTo((left + i) * this.SIZE, max[i]);
    }

    context.stroke();
    context.closePath();

    // Avg line
    context.strokeStyle = this.AVG_COLOUR;
    context.setLineDash([8]);
    context.beginPath();
    context.moveTo(left * this.SIZE, avg[0]);

    for (let i = 1; i < avg.length; i++) {
      context.lineTo((left + i) * this.SIZE, avg[i]);
    }

    context.stroke();
    context.closePath();

    context.restore();
  }

  public f(x: number): {
    min: number;
    max: number;
    avg: number;
  } {
    const min = Game.screen.y * (this.simplex.noise(x * this.MIN_SCALE_X, 0) * this.MIN_SCALE_Y + this.MIN_OFFSET);
    const max = min - ((Game.screen.y * 0.75) * (0.5 + (this.simplex.noise(x * this.MAX_SCALE_X, 1000) * this.MAX_SCALE_Y) / 2));
    const avg = Game.screen.y * (0.5 + (this.simplex.noise(x * this.AVG_SCALE_X, 0.5) * this.AVG_SCALE_Y + this.AVG_OFFSET) / 2);

    return { min, max, avg };
  }
}
