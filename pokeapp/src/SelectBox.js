import React from 'react';

class SelectBox extends React.Component {
    createSelectItems() {
        let items = [];         
        for (let i = 0; i <= this.props.colorOptions.length; i++) {             
             items.push(<option key={i} value={this.props.colorOptions[i]}>{this.props.colorOptions[i]}</option>);   
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
        }
        return items;
      }  
    render() {
        return (
        <div>
            <label htmlFor="colors">Choose a color: </label>
            <select name="colors" id="colors" onChange={this.props.changeDetected}>
                {this.createSelectItems()}
            </select>
        </div>
        );
    }
}

export default SelectBox;