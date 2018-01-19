import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Button from './components/Button/Button';
import { Enter } from './containers/Enter/Enter';
import { Game } from './containers/Game/Game';

configure({adapter: new Adapter()});

describe('<Enter/>', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App/>);
    });

    it('should render the component', () => {
      app = shallow(<App/>);
      expect(app.exists()).toBe(true);
    });

    it('should show start game on the start', () => {
      expect(app.find(Enter).length).toBe(1);
    });

    it('should load game if game started', () => {
       app.instance().changeGameState('game');
       console.log(app.html())
       expect(app.find(Game).length).toBe(1);
    });
})
