import React from "react";
import {mount} from "enzyme";
import RPCLogo from "../../src/components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "../../src/lib/types/common";

describe("RPC Logo tests", () => {
    test("Given rock action, should show rock logo", () => {
        const component = mount(RPCLogo({action: ROCKPAPERSCISSORS.ROCK, result: RPC_RESULT.DRAW}));
        expect(component.find(".rock_img").length).toBe(1);
    });

    test("Given paper action, should show paper logo", () => {
        const component = mount(
            RPCLogo({action: ROCKPAPERSCISSORS.PAPER, result: RPC_RESULT.DRAW})
        );
        expect(component.find(".paper__img").length).toBe(1);
    });

    test("Given scissors action, should show scissors logo", () => {
        const component = mount(
            RPCLogo({action: ROCKPAPERSCISSORS.SCISSORS, result: RPC_RESULT.DRAW})
        );
        expect(component.find(".scissors__img").length).toBe(1);
    });
});
