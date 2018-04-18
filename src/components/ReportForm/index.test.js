import React from 'react';
import { shallow } from 'enzyme';
import ReportForm from './index';

describe('ReportForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ReportForm
        name=''
        description=''
        date=''
        location={{}}
        reward=''
        routeId='lost'
        handleGoBack={jest.fn()}
        handleOnChange={jest.fn()}
        handleOnSubmit={jest.fn()}
      />
    );
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot for a found item route', () => {
    wrapper = shallow(
      <ReportForm
        name=''
        description=''
        date=''
        location={{}}
        reward=''
        routeId='found'
        handleGoBack={jest.fn()}
        handleOnChange={jest.fn()}
        handleOnSubmit={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});