import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
 import JoinMissionCTA from './components/JoinMissionCTA';



describe('tests Space Travel`s Hub App test', () => {
    test('should render the component', () => {
        const component = renderer.create(<JoinMissionCTA />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

});