import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ActiveMemberCTA from '../components/MissionCTA/ActiveMemberCTA';

describe('tests Space Travel`s Hub App test', () => {
  it('renders the ActiveMember component', () => {
    const component = renderer.create(<ActiveMemberCTA />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
