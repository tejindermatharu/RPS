export enum ROCKPAPERSCISSORS {
    "ROCK" = "ROCK",
    "PAPER" = "PAPER",
    "SCISSORS" = "SCISSORS"
}

export enum RPC_RESULT {
    "WIN" = "WIN",
    "LOST" = "LOST",
    "DRAW" = "DRAW",
    "DEFAULT" = "DEFAULT"
}

export type GameResult = {
    yourResult: RPC_RESULT;
    aiResult: RPC_RESULT;
};
