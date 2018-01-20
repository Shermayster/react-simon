import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Button/Button';
import Game from './Game';
configure({adapter: new Adapter()});

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
        game.update();
        const colors = game.instance().state.colors;
        expect(colors.length).toBe(1);
    });
});