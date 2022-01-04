import React from "react";
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import { shallow } from "enzyme";
import Counter from "./Counter";
import { fireEvent, render } from '@testing-library/react'

describe("Basic rendering of counter",()=>{
    it("Should render counter value",()=> {
        const counter = shallow(<Counter />);
        const counterValue = counter.find(Text);
        expect(counterValue).toBeDefined();
    })
    it("should be equal to 0",()=>{
        //const component = render(<Counter/>);
        const { getByTestId } = render(<Counter/>);
        expect(getByTestId("Counter")).toHaveTextContent(0);
    })
    it("should be able to increment",()=>{
        const { getByTestId } = render(<Counter/>);
        expect(getByTestId("up-button")).not.toHaveAttribute("disabled");
    })
    
    it("should be unable to decrement",()=>{
        const { getByTestId } = render(<Counter/>);
        expect(getByTestId("down-button")).not.toHaveAttribute("disabled");
    })
})

describe("Testing Counter",()=>{
    it("Increment counter when increment button is pressed",()=>{
        const {getByTestId} = render(<Counter/>)
        fireEvent.click(getByTestId("up-button"));
        expect(getByTestId("Counter")).toHaveTextContent("1");

    })
    it("Decrement counter when Decrement button is pressed",()=>{
        const {getByTestId} = render(<Counter/>)
        fireEvent.click(getByTestId("down-button"));
        expect(getByTestId("Counter")).toHaveTextContent("-1");

    })
})



