import { vec } from '@basementuniverse/vec';
import Actor from './Actor';
import { CameraBounds } from '@basementuniverse/camera';

export default class Axes extends Actor {
  private readonly BACKGROUND = 'white';
  private readonly COLOUR = '#333';
  private readonly STROKE = 2;
  private readonly GAP = 100;
  private readonly BORDER = 100;
  private readonly FONT = '16px sans-serif';

  public constructor() {
    super();
  }

  public update() {}

  public draw(context: CanvasRenderingContext2D, bounds: CameraBounds) {
    context.save();

    // Border
    context.fillStyle = this.BACKGROUND;
    const height = bounds.bottom - bounds.top;
    const width = bounds.right - bounds.left;
    context.fillRect(bounds.left, bounds.top, this.BORDER, height);
    context.fillRect(bounds.left, bounds.bottom - this.BORDER, width, this.BORDER);
    context.fillRect(bounds.right - this.BORDER, bounds.top, this.BORDER, height);
    context.fillRect(bounds.left + this.BORDER, bounds.top, width - this.BORDER, this.BORDER);

    // Axes
    context.strokeStyle = this.COLOUR;
    context.lineWidth = this.STROKE;

    this.drawLine(
      context,
      vec(
        bounds.left + this.BORDER,
        bounds.top + this.BORDER
      ),
      vec(
        bounds.left + this.BORDER,
        bounds.bottom - this.BORDER
      )
    );

    this.drawLine(
      context,
      vec(
        bounds.left + this.BORDER,
        bounds.bottom - this.BORDER
      ),
      vec(
        bounds.right - this.BORDER,
        bounds.bottom - this.BORDER
      )
    );

    // Labels
    const topLeft = vec(
      Math.floor(bounds.left / this.GAP) * this.GAP,
      Math.floor(bounds.top / this.GAP) * this.GAP
    );
    const bottomRight = vec(
      Math.ceil(bounds.right / this.GAP) * this.GAP,
      Math.ceil(bounds.bottom / this.GAP) * this.GAP
    );

    context.font = this.FONT;
    context.fillStyle = this.COLOUR;

    for (let x = topLeft.x; x <= bottomRight.x; x += this.GAP) {
      if (x >= bounds.left + this.BORDER && x <= bounds.right - this.BORDER) {
        const t = Math.round((x - 100) / this.GAP).toString();
        context.fillText(t, x, bounds.bottom - this.BORDER / 2);
      }
    }

    for (let y = topLeft.y; y <= bottomRight.y; y += this.GAP) {
      if (y >= this.BORDER && y <= bounds.bottom - this.BORDER) {
        const t = Math.round((bounds.bottom - y - 100) / this.GAP).toString();
        context.fillText(t, bounds.left + this.BORDER / 2, y);
      }
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
