import * as React from 'react';
import * as enzyme form 'enzyme';
import Hello from './Hello';
it('render the correct text when no enthusiasm level is given',()=>{
   const hello =enzyme.shallow(<Hello name="stone"/>);
   expect(hello.find(".greeting").text()).toEqual('Hello stone!');
});
