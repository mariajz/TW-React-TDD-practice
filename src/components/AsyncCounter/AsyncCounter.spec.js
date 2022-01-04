import React from "react";
import AsyncCounter from "./AsyncCounter";
import { fireEvent, render, waitFor } from '@testing-library/react'

describe("Testing asynchronous counter functionality",()=>{
    it("increments counter after 0.5 secs after button is clicked",async()=>{
        const{getByTestId, getByText} = render(<AsyncCounter/>);
        fireEvent.click(getByTestId("up-button"));
        const counter = await waitFor( () => getByText("1"));
        expect(counter).toHaveTextContent("1");
    });
})

