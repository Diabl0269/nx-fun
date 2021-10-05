import { render } from '@testing-library/react';

import SharedComponentsTest from './shared-components-test';

describe('SharedComponentsTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest />);
    expect(baseElement).toBeTruthy();
  });
});
