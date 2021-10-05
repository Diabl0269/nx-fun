import { render } from '@testing-library/react';

import SharedComponentsTest9 from './shared-components-test9';

describe('SharedComponentsTest9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest9 />);
    expect(baseElement).toBeTruthy();
  });
});
