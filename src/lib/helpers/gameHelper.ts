import {GameResult, ROCKPAPERSCISSORS, RPC_RESULT} from "../types/common";

export function createGameResult(yourResult: RPC_RESULT, aiResult: RPC_RESULT): GameResult {
    return {yourResult, aiResult};
}

export function getRPCResult(you: ROCKPAPERSCISSORS, ai: ROCKPAPERSCISSORS): GameResult {
    const rule = rpcRules.get(you);

    if (you === ai) {
        return createGameResult(RPC_RESULT.DRAW, RPC_RESULT.DRAW);
    }

    if (rule === ai) {
        return createGameResult(RPC_RESULT.LOST, RPC_RESULT.WIN);
    }

    return createGameResult(RPC_RESULT.WIN, RPC_RESULT.LOST);
}

const rpcRules = new Map([
    [ROCKPAPERSCISSORS.ROCK, ROCKPAPERSCISSORS.PAPER],
    [ROCKPAPERSCISSORS.PAPER, ROCKPAPERSCISSORS.SCISSORS],
    [ROCKPAPERSCISSORS.SCISSORS, ROCKPAPERSCISSORS.ROCK]
]);
