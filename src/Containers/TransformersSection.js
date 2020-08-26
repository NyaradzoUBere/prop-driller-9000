import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  render() {
    const transformer = this.props.data.map(transformer => {return (<Transformer name = {transformer.name} url= {transformer.url} />) })
    return (
      <section className = "transformers-section">
        {transformer}
      </section>
    );
  }
}

export default TransformersSection;
