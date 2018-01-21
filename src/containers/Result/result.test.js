import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Button/Button';
import Result from './result';
configure({adapter: new Adapter()});


describe('<Result />', () => {
    let result;
    beforeEach(() => {
        result = shallow(<Result />);
    });

    it('should render', () => {
        expect(result.exists()).toBe(true);
    });
})  