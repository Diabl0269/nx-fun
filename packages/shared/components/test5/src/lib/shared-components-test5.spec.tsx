import { render } from '@testing-library/react';

import SharedComponentsTest5 from './shared-components-test5';

describe('SharedComponentsTest5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest5 />);
    expect(baseElement).toBeTruthy();
  });
});
