import { render } from '@testing-library/react';

import SharedComponentsTest6 from './shared-components-test6';

describe('SharedComponentsTest6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest6 />);
    expect(baseElement).toBeTruthy();
  });
});
