import { render } from '@testing-library/react';

import SharedComponentsTest3 from './shared-components-test3';

describe('SharedComponentsTest3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest3 />);
    expect(baseElement).toBeTruthy();
  });
});
