import React from 'react';

/* class Categories extends React.Component {
  state = {
    activeItem: true
  };
  
  onSelectItem = index => {
    this.setState({
      activeItem: index
    });
  }

  render() {
    const {items, onClick} = this.props;
    return (
      <div className="categories">
            <ul>
              
              {
                items.map((name, index) => 
                <li className={
                this.state.activeItem === index ? 'active' : ''} 
                onClick={() => this.onSelectItem(index)} 
                key={`${name}_${index}`}>{name}</li>)
              }
              
            </ul>
      </div>
  )
  }
} */

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
