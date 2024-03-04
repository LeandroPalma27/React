import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Proptypes vendria a ser como la especificacion del tipo de dato de cada propiedad o estado del componente.

// Definimos el tipo de datos para las propiedades del componente
interface CCStateProps {
  value: number;
  nombre: string;
}

// Definimos el tipo de datos para el estado del componente
interface CCStateState {
  value: number;
  nombre: string;
}

// Un class component debe tener definido el tipo de props y el tipo de datos del estado.
class CCState extends Component<CCStateProps, CCStateState> {

  // Definimos la propiedad "PropTypes" para que el componente acepte la definicion de los proptypes
  static propTypes: {
    value: PropTypes.Validator<number>;
    nombre: PropTypes.Validator<string>
  };

  constructor(props) {
    super(props);
    // Definimos el estado inicial del componente
    this.state = {
      value: props.value,
      nombre: props.nombre,
    }
  }

  addNumber = () => {
    this.setState({ value: this.state.value + 1 });
  }

  substractNumber = () => {
    this.setState({ value: this.state.value - 1 });
  }

  reset = () => {
    this.setState({value: this.props.value});
  }

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.addNumber}>+1 (CLASS COMPONENT)</button>
        <button onClick={this.substractNumber}>-1 (CLASS COMPONENT)</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

// PropType validaciones para el llamado componente
CCState.propTypes = {
  value: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default CCState;
