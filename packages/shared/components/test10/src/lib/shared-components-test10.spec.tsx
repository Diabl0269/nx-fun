import { render } from '@testing-library/react';

import SharedComponentsTest10 from './shared-components-test10';

describe('SharedComponentsTest10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest10 />);
    expect(baseElement).toBeTruthy();
  });
});
