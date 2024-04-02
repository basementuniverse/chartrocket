import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import Actor from './Actor';
import * as config from './config.json';
import { GameScene } from './GameScene';
import { Bounds } from './types';

export default class Rocket extends Actor {
  private readonly FILL_COLOUR = 'white';
  private readonly STROKE_COLOUR = 'black';
  private readonly SIZE = 32;
  private readonly STROKE = 2;
  private readonly THRUST = 5;
  private readonly TURN_SPEED = 1.8;
  private readonly FRICTION = 0.992;
  private readonly GRAVITY = 0.8;

  public position: vec = vec();
  public velocity: vec = vec();
  public direction: number = 0;
  public size: vec = vec(this.SIZE, this.SIZE);

  public constructor(position: vec) {
    super();
    this.position = position;
  }

  public update(dt: number) {
    // Turning
    if (InputManager.keyDown(config.controls.left)) {
      this.direction -= this.TURN_SPEED * dt;
    } else if (InputManager.keyDown(config.controls.right)) {
      this.direction += this.TURN_SPEED * dt;
    }

    // Thrust
    let moveVector = vec();
    if (InputManager.keyDown(config.controls.up)) {
      moveVector = vec(this.THRUST, 0);
    } else if (InputManager.keyDown(config.controls.down)) {
      moveVector = vec(-this.THRUST, 0);
    }
    moveVector = vec.rot(moveVector, this.direction);

    // Gravity
    moveVector = vec.add(moveVector, vec(0, this.GRAVITY));

    // Integrate
    this.velocity = vec.add(this.velocity, moveVector);
    this.velocity = vec.mul(this.velocity, this.FRICTION);
    this.position = vec.add(this.position, vec.mul(this.velocity, dt));
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.direction);
    context.strokeStyle = this.STROKE_COLOUR;
    context.fillStyle = this.FILL_COLOUR;
    context.lineWidth = this.STROKE;
    context.beginPath();
    context.moveTo(-this.size.x / 2, -this.size.y / 2);
    context.lineTo(this.size.x / 2, 0);
    context.lineTo(-this.size.x / 2, this.size.y / 2);
    context.lineTo(-this.size.x / 2, this.size.y * 0.1);
    context.lineTo(-this.size.x, this.size.y * 0.1);
    context.lineTo(-this.size.x, -this.size.y * 0.1);
    context.lineTo(-this.size.x / 2, -this.size.y * 0.1);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}
