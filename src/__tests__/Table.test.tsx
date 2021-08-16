import React from 'react';
import { shallow } from 'enzyme';
import Table from '../components/Table';
import SelectedRows from '../components/SelectedRows';
import DATA from "../data/data.json";
import { COLUMNS } from "../data/columns";

let wrapped:any; 

beforeEach(() => wrapped = shallow<typeof Table>(<Table  columns={COLUMNS}  data={DATA} />)); 

afterEach(() => wrapped.unmount());

it('renders the app queue table', () => {
    expect(wrapped.find('table').length).toEqual(1)
});

it('renders each column plus additional column for selection', () => {
    expect(wrapped.find('th').length).toEqual(COLUMNS.length + 1);
})

it('renders four buttons for pagination', () => {
    expect(wrapped.find('button').length).toEqual(4);
})

it('renders drop down for record display range', () => {
    expect(wrapped.find('select').length).toEqual(1);
})

it('renders component containing data of selected rows', () => {
    expect(wrapped.find(SelectedRows).length).toEqual(1);
})
