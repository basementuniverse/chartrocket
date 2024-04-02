import InputManager from '@basementuniverse/input-manager';
import SceneManager, {
  Scene,
  SceneTransitionState,
} from '@basementuniverse/scene-manager';
import { lerp } from '@basementuniverse/utils';
import Game from './Game';
import { GameScene } from './GameScene';

export class GameOverScene extends Scene {
  private x: number = 0;
  private ttl: number = 1;

  public constructor(x: number) {
    super({
      transitionTime: 1,
    });

    this.x = x;
  }

  public initialise() {}

  public update(dt: number) {
    this.ttl -= dt;

    if (this.ttl <= 0 && InputManager.keyPressed()) {
      SceneManager.pop();
      SceneManager.push(new GameScene());
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    if (this.transitionState !== SceneTransitionState.None) {
      context.globalAlpha = this.transitionAmount;
    }

    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    const y = lerp(-200, Game.screen.y / 2, this.transitionAmount);
    context.fillStyle = `rgba(255, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
    context.font = '48px Times New Roman';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('You died!', Game.screen.x / 2, y);
    context.font = '36px Times New Roman';
    context.fillText(`Score: ${Math.round(this.x)}`, Game.screen.x / 2, y + 70);

    context.restore();
  }
}
