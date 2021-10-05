import { render } from '@testing-library/react';

import SharedComponentsTest7 from './shared-components-test7';

describe('SharedComponentsTest7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest7 />);
    expect(baseElement).toBeTruthy();
  });
});
