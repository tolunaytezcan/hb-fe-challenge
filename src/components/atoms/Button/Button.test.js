import { render } from '@testing-library/react';
import Button from 'components/atoms/Button/Button.js';

describe('button component', () => {
  it('should be rendered', () => {
    const component = render(<Button text="Deneme" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
