import InputManager from '@basementuniverse/input-manager';
import SceneManager, {
  Scene,
  SceneTransitionState,
} from '@basementuniverse/scene-manager';
import { lerp } from '@basementuniverse/utils';
import Game from './Game';
import { GameScene } from './GameScene';
import * as config from './config.json';

export class MenuScene extends Scene {
  public constructor() {
    super({
      transitionTime: 1,
    });
  }

  public initialise() {}

  public update(dt: number) {
    if (InputManager.keyPressed()) {
      SceneManager.pop();
      SceneManager.push(new GameScene());
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    if (this.transitionState !== SceneTransitionState.None) {
      context.globalAlpha = this.transitionAmount;
    }

    const y = lerp(-200, Game.screen.y / 2, this.transitionAmount);
    context.fillStyle = `rgba(0, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
    context.font = '48px Times New Roman';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(config.title, Game.screen.x / 2, y);
    context.font = '36px Times New Roman';
    context.fillText('Press any key', Game.screen.x / 2, y + 70);

    context.restore();
  }
}
