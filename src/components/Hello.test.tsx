import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';
it('render the correct text when no enthusiasm level is given',()=>{
   const hello =enzyme.shallow(<Hello name="stone"/>);
   expect(hello.find(".greeting").text()).toEqual('Hello stone!');
});
it('render the correct text with an explict enthusiasm of 1',()=>{
    const hello=enzyme.shallow(<Hello name="stone" enthusiasmLevel={1}/>);
    expect(hello.find(".greeting").text()).toEqual('Hello stone!');
})
it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='stone' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello stone!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='stone' enthusiasmLevel={0} />);
    }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='stone' enthusiasmLevel={-1} />);
    }).toThrow();
});