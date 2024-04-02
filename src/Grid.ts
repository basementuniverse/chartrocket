import { vec } from '@basementuniverse/vec';
import Actor from './Actor';
import { CameraBounds } from '@basementuniverse/camera';

export default class Grid extends Actor {
  private readonly COLOUR = '#ccc';
  private readonly STROKE = 1;
  private readonly SIZE = 100;

  public constructor() {
    super();
  }

  public update() {}

  public draw(context: CanvasRenderingContext2D, bounds: CameraBounds) {
    context.save();
    context.strokeStyle = this.COLOUR;
    context.lineWidth = this.STROKE;

    // Grid
    const topLeft = vec(
      Math.floor(bounds.left / this.SIZE) * this.SIZE,
      Math.floor(bounds.top / this.SIZE) * this.SIZE
    );
    const bottomRight = vec(
      Math.ceil(bounds.right / this.SIZE) * this.SIZE,
      Math.ceil(bounds.bottom / this.SIZE) * this.SIZE
    );

    for (let x = topLeft.x; x <= bottomRight.x; x += this.SIZE) {
      this.drawLine(context, vec(x, topLeft.y), vec(x, bottomRight.y));
    }

    for (let y = topLeft.y; y <= bottomRight.y; y += this.SIZE) {
      this.drawLine(context, vec(topLeft.x, y), vec(bottomRight.x, y));
    }

    context.restore();
  }

  private drawLine(context: CanvasRenderingContext2D, a: vec, b: vec) {
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
    context.closePath();
  }
}
