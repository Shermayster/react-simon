import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Button/Button';
import Game from './Game';

import jsdom from 'jsdom'
configure({adapter: new Adapter()});
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('<Game/>', () => {
    let game;
    beforeEach(() => {
        game = shallow(<Game/>);
    });

    it('should render', () => {
        expect(game.exists()).toBe(true);
    });
    it('should have 4 buttons', () => {
        expect(game.find('button').length).toBe(4)
    });
    
    it('should have current turn count', () => {
        const turn = game.instance().state.playerTurn;
        expect(turn).toBe(0);
    });

    it('should have order of colors array', () => {
        const colors = game.instance().state.colors;
        expect(colors.length).toBe(1);
    });

    it('should get color buttons clicked', () => {
        const mountGame = mount(<Game/>);
        const spy = jest.spyOn(mountGame.instance(), 'handlePlayerColor');
        mountGame.setProps({onFinishGame: () => null});
        mountGame.find('button.RED').simulate('click');
        mountGame.update();
        expect(spy).toHaveBeenCalledWith(0);
    });

    xit('should check if color is matched', () => {
        const mountGame = mount(<Game/>);
        mountGame.setProps({onFinishGame: () => null});
        mountGame.find('button.RED').simulate('click');
        mountGame.update();
        expect(mountGame.instance().state.playerTurn).toBe(1);
    });
});