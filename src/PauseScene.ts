import InputManager from '@basementuniverse/input-manager';
import SceneManager, {
  Scene,
  SceneTransitionState,
} from '@basementuniverse/scene-manager';
import { lerp } from '@basementuniverse/utils';
import Game from './Game';
import { GameScene } from './GameScene';

export class PauseScene extends Scene {
  public constructor() {
    super({
      transitionTime: 1,
    });
  }

  public initialise() {}

  public update(dt: number) {
    if (InputManager.keyPressed()) {
      SceneManager.pop();
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    if (this.transitionState !== SceneTransitionState.None) {
      context.globalAlpha = this.transitionAmount;
    }

    context.fillStyle = 'rgba(255, 255, 255, 0.75)';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    const y = lerp(-200, Game.screen.y / 2, this.transitionAmount);
    context.fillStyle = `rgba(0, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
    context.font = '48px Times New Roman';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Paused', Game.screen.x / 2, y);

    context.restore();
  }
}
