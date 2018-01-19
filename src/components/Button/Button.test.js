import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';
configure({adapter: new Adapter()});

describe('<Button/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button>Test</Button>)
    });

    it('should be defined', () => {
        expect(wrapper).toBeDefined();
    });

    it('should call to function', () => {
        const spy = jest.fn();
        wrapper.setProps({clicked: spy});
        const button = wrapper.find('.Button');
        button.simulate('click');
        expect(spy).toHaveBeenCalled();    
    })
})