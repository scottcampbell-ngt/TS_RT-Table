import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Table from '../components/Table';
import { TableOptions } from 'react-table';
import DATA from "../data/data.json";
import { COLUMNS } from "../data/columns";



const wrapped = shallow<typeof Table>(<Table  columns={COLUMNS}  data={DATA} />);

it('renders the app queue table', () => {
    expect(wrapped.find('table').length).toEqual(1)

});

//   it('renders an `.icon-star`', () => {
//     const wrapper = shallow(<Table />);
//     expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
//   });

//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <Table>
//         <div className="unique" />
//       </Table>
//     ));
//     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//   });

//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
