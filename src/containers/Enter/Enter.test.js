import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Button/Button';
import Enter from './Enter';
configure({adapter: new Adapter()});

describe('<Enter/>', () => {
    let enter;
    beforeEach(() => {
        enter = shallow(<Enter/>);
    })

    it('should exist', () => {
        expect(enter.exists()).toBe(true);
    })
});
