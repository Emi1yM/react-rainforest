import React, {Component} from 'react';
import ItemCard from './ItemCard.js'

export class ItemGroup extends Component {
  render() {
  return (
    <div className="ItemGroup">
      <h1>This is a group of items.</h1>
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}
}

export default ItemGroup;