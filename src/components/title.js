import React from 'react';
import { connect } from 'react-redux';


const Title = ({newValue}) => (
    <h1>{newValue}</h1>
)

export default connect(state => ({
    newValue: state.clickState.newValue
}))(Title);
