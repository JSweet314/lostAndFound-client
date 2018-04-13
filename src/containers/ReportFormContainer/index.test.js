import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import { ReportFormContainer, mapDispatchToProps, mapStateToProps }
  from './index';

describe('ReportFormContainer', () => {
  let wrapper;
  const mockMatch = { params: { id: 'lost' } };
  const mockState = {
    name: 'phone',
    description: 'black iphone',
    location: 'Turing School',
    date: '04/01/2018',
    reward: '0'
  };
  const mockItem = { ...mockState, status: 'lost', userId: 1 };
  const mockGoBack = jest.fn();
  const mockHistory = { goBack: () => mockGoBack() };
  const mockReportItem = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <ReportFormContainer
        userId={1}
        match={mockMatch}
        history={mockHistory}
        reportItem={mockReportItem} />
    );
  });

  it('should match a snapshot()', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a handleOnChange method', () => {
    wrapper.instance().handleOnChange({
      target: {
        name: 'name',
        value: 'phone'
      }
    });
    expect(wrapper.state('name')).toEqual('phone');
  });

  it('should have a handleGoBack method', () => {
    wrapper.instance().handleGoBack({ preventDefault: jest.fn() });
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should have a handleOnSubmit method', () => {
    wrapper.instance().handleOnSubmit({ preventDefault: jest.fn() });
    const expected = {
      name: '',
      description: '',
      location: '',
      date: '',
      reward: '',
      status: 'lost',
      userId: 1
    };
    expect(mockReportItem).toHaveBeenCalledWith(expected);
  });

  it('should reset state after submitting an item report', () => {
    wrapper.setState(mockState);
    wrapper.instance().handleOnSubmit({ preventDefault: jest.fn() });
    expect(wrapper.state()).toEqual({
      name: '',
      description: '',
      location: '',
      date: '',
      reward: ''
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with reportItem action creator', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.reportItem(mockItem);
      expect(mockDispatch).toHaveBeenCalledWith(actions.reportItem(mockItem));
    });
  });

  describe('mapStateToProps', () => {
    const expected = { userId: 1 };
    expect(mapStateToProps({ user: { id: 1 } })).toEqual(expected);
  });
});