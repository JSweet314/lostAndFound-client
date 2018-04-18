import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer';
import * as actions from '../../actions';
import Item from '../../components/Item';
import PropTypes from 'prop-types';
import './style.css';

export class ItemsContainer extends Component {

  handleOnClick = itemId => {
    const item = this.props.items.find(item => item.itemId === itemId);
    if (item.locationId) {
      const { locationId } = item;
      this.props.getLocationDetails({ locationId, itemId });
    }
  }

  itemList = () => this.props.items.map(item =>
    <li
      className='list-item'
      key={item.itemId}>
      <Item {...item} handleOnClick={this.handleOnClick} />
    </li>
  );

  render() {
    return (
      <section className='items-container'>
        <div className='item-map'>
          <MapContainer
            height='87%'
            width='75%'
            captureMarkerCoords={() => { }} />
        </div>
        <ul className='items-list'>
          {this.itemList()}
        </ul>
      </section>
    );
  }
}

export const mapStateToProps = ({ items }) => ({
  items
});

export const mapDispatchToProps = dispatch => ({
  getLocationDetails: ids => dispatch(actions.fetchItemLocation(ids))
});

ItemsContainer.propTypes = {
  getLocationDetails: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);