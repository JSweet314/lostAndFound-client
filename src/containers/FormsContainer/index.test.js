import React from 'react';
import {shallow} from 'enzyme';
import {FormsContainer} from './index';

describe('FormsContainer', () => {
  let wrapper;
  const mockLoginMatch = {params: {id: 'login'}};
  beforeEach(() => {
    wrapper = shallow(
      <FormsContainer 
        match={mockLoginMatch}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});