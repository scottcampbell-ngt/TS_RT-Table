import React from 'react';
import { shallow } from 'enzyme';
import Table from '../components/Table';
import App from '../App';
import { transpileModule } from 'typescript';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('render Table component', () => {
    expect(wrapped.find(Table).length).toEqual(1);
})


