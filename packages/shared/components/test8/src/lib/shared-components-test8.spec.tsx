import { render } from '@testing-library/react';

import SharedComponentsTest8 from './shared-components-test8';

describe('SharedComponentsTest8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest8 />);
    expect(baseElement).toBeTruthy();
  });
});
