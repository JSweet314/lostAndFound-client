import React from 'react';
import { shallow } from 'enzyme';
import MapComponent from './index';
import { googleUrl } from '../../private/keys';

describe('MapComponent', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <MapComponent
        loadingElement={<div></div>}
        googleMapURL={googleUrl}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});