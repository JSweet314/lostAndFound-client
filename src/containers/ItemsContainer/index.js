import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer';
import './style.css';

export class ItemsContainer extends Component {

  handleOnClick = () => {

  }

  itemList = () => this.props.items.map(item =>
    <li
      className='list-item'
      key={item.itemId}>
      <article
        className='user-item'
        onClick={() => this.handleOnClick()}>
        <h3>{item.status}: {item.name}</h3>
        <p>{item.description}</p>
        <p>{item.date}</p>
      </article>
    </li>
  );

  render() {
    return (
      <section className='items-container'>
        <div className='item-map'>
          <MapContainer  height='87%' width='75%' captureMarkerCoords={() => {}}/>
        </div>
        <ul className='items-list'>
          {this.itemList()}
        </ul>
      </section>
    );
  }
}

export const mapStateToProps = ({items}) => ({
  items
});

export default connect(mapStateToProps)(ItemsContainer);