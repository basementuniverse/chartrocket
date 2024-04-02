import Camera from '@basementuniverse/camera';
import InputManager from '@basementuniverse/input-manager';
import SceneManager, {
  Scene,
  SceneTransitionState,
} from '@basementuniverse/scene-manager';
import { vec } from '@basementuniverse/vec';
import Game from './Game';
import Grid from './Grid';
import Axes from './Axes';
import Chart from './Chart';
import Rocket from './Rocket';
import { GameOverScene } from './GameOverScene';
import { MenuScene } from './MenuScene';
import { PauseScene } from './PauseScene';

export class GameScene extends Scene {
  private static readonly TRANSITION_TIME: number = 1;

  private camera: Camera;
  private grid: Grid;
  private axes: Axes;
  private chart: Chart;
  private rocket: Rocket;

  private lastPointsTime = 0;
  private points: number = 0;
  private previousPosition: number = 0;
  private previousPoints: number = 0;

  public constructor() {
    super({
      transitionTime: GameScene.TRANSITION_TIME,
      transparent: false,
    });
  }

  public initialise() {
    const center = vec.mul(Game.screen, 1 / 2);
    this.camera = new Camera(center, {
      moveEaseAmount: 0.8,
    });

    this.grid = new Grid();
    this.axes = new Axes();
    this.chart = new Chart();

    const { min, max } = this.chart.f(center.x);
    this.rocket = new Rocket(vec(center.x, (min + max) / 2));
  }

  public update(dt: number) {
    const center = vec.mul(Game.screen, 1 / 2);
    if (InputManager.keyPressed('Escape')) {
      SceneManager.pop();
      SceneManager.push(new MenuScene());
    }

    if (InputManager.keyPressed('Space')) {
      SceneManager.push(new PauseScene());
    }

    this.rocket.update(dt);
    this.camera.position = vec(this.rocket.position.x, center.y);

    const { min, max, avg } = this.chart.f(this.rocket.position.x);

    this.lastPointsTime += dt;
    if (this.lastPointsTime > 1) {
      this.previousPosition = this.rocket.position.y;
      this.previousPoints = this.points;
      this.points += (100 - Math.abs(this.rocket.position.y - avg));
      this.lastPointsTime = 0;
    }

    if (this.rocket.position.y >= min || this.rocket.position.y <= max) {
      SceneManager.pop();
      SceneManager.push(new GameOverScene(this.rocket.position.x + this.points));
    }

    if (
      this.rocket.position.y <= 0 ||
      this.rocket.position.y >= Game.screen.y
    ) {
      SceneManager.pop();
      SceneManager.push(new GameOverScene(this.rocket.position.x + this.points));
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    if (this.transitionState !== SceneTransitionState.None) {
      context.globalAlpha = this.transitionAmount;
    }

    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    context.save();
    this.camera.draw(context, Game.screen.x, Game.screen.y);

    this.grid.draw(context, this.camera.bounds);
    this.chart.draw(context, this.camera.bounds);
    this.axes.draw(context, this.camera.bounds);
    this.rocket.draw(context);

    context.restore();

    context.fillStyle = this.rocket.position.x < this.previousPosition ? 'red' : 'blue';
    context.fillRect(30, 30, 200, 30);
    context.fillStyle = 'white';
    context.font = 'bold 16px sans-serif';
    const positionSymbol = this.rocket.position.x < this.previousPosition ? '\u{25BC}' : '\u{25B2}';
    context.fillText(`${positionSymbol} POS ${Math.round(this.rocket.position.x)}`, 40, 50);

    context.fillStyle = this.points < this.previousPoints ? 'red' : 'green';
    context.fillRect(240, 30, 200, 30);
    context.fillStyle = 'white';
    context.font = 'bold 16px sans-serif';
    const pointsSymbol = this.points < this.previousPoints ? '\u{25BC}' : '\u{25B2}';
    context.fillText(`${pointsSymbol} PTS ${Math.round(this.points)}`, 250, 50);

    context.restore();
  }
}
