import {gameMachine} from "../../src/lib/state-machine/gameMachine";

describe("Game state Machine test", () => {
    test("Given idle state, when starting to PLAY, should transition to playing", () => {
        const expectedValue = "playing";

        const actualState = gameMachine.transition("idle", "PLAY");

        expect(actualState.matches(expectedValue)).toBeTruthy();
    });
});
