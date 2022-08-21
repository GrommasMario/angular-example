import { Game } from './Game';
import isWorkingValue from '../functions/IsWorking';

export interface IMeetingPlayersAmount {
    minimum: number;
    maximum: number;
}

export interface IMeetingPlayerCalculatorSetting {
    maximum?: number;
    minimum?: number;
}

export class MeetingPlayerCalculator {
    games: Game[];

    setting: IMeetingPlayerCalculatorSetting;

    constructor(games: Game[]);
    constructor(games: Game[], setting: IMeetingPlayerCalculatorSetting);
    constructor(games: Game[], setting?: IMeetingPlayerCalculatorSetting) {
        if (setting) {
            this.setting = setting;
        } else {
            this.setting = {};
        }

        this.games = games;
    }

    get players(): IMeetingPlayersAmount {
        const maximum = this.calculateMaximum();
        return {
            maximum,
            minimum: this.calculateMinimum(maximum),
        };
    }

    protected calculateMaximum(): number {
        if (isWorkingValue(this.setting.maximum)) {
            return this.setting.maximum!;
        }

        let maximum = 0;
        for (const game of this.games) {
            if (game.playerMaximum > maximum) {
                maximum = game.playerMaximum;
            }
        }

        return maximum;
    }

    protected calculateMinimum(): number;
    protected calculateMinimum(maximum: number): number;
    protected calculateMinimum(maximum?: number): number {
        if (isWorkingValue(this.setting.minimum)) {
            return this.setting.minimum!;
        }

        let minimum = maximum;
        if (minimum === undefined) {
            minimum = this.calculateMaximum();
        }

        for (const game of this.games) {
            if (game.playerMinimum < minimum) {
                minimum = game.playerMinimum;
            }
        }

        return minimum;
    }
}
