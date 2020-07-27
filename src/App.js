import React from 'react';
import './App.scss';
import Container from './Components/Container';
import ResultsBox from './Components/Result';
import InputBox from './Components/Input';

class Converter extends React.Component {
  state = { value: 100, conversionType: "d2b" };

  decimalToBinary() {
    return Number(this.state.value).toString(2);
  }

  binaryToDecimal() {
    return parseInt(this.state.value, 2);
  }

  render() {
    return (
      <Container>
        <InputBox
          state={this.state}
          radioHandler={conversionType => this.setState({ conversionType })}
          inputHandler={value => this.setState({ value })}
        />
        <ResultsBox
          value={this.state.conversionType === "d2b" ? this.decimalToBinary() : this.binaryToDecimal()}
        />
      </Container>
    );
  }
}

export default Converter;
