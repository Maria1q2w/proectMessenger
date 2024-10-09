import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("PrrofileStatus component", () => {
    test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="finish" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("finish");
    });

    test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="finish" />);
    const instance = component.getInstance();
    const span = instance.findByType("span");
    expect(span.length).toBe(1);
    });
});