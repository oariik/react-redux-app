import React, { Component } from 'react';
import { connect } from 'react-redux';

class Siniflar extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Sınıf</b>
        </p>
        Ad : <input id="txtSinifAd" type="text" onChange={this.props.degistirSinifAd} />
        <br />
        Ogretmen : <input id="txtOgretmenAd" type="text" onChange={this.props.degistirSinifOgretmen} />
        <br />
        <br />
        Sınıf : {this.props.sinifAd}, Öğretmen: {this.props.sinifOgretmen}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sinifAd: state.sinifReducer.sinifAd,
    sinifOgretmen: state.sinifReducer.sinifOgretmen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    degistirSinifAd: () => {
      dispatch({ type: 'SINIF.DEGISTIR_AD', payload: { sinifAd: document.getElementById('txtSinifAd').value } });
    },
    degistirSinifOgretmen: () => {
      dispatch({
        type: 'SINIF.DEGISTIR_OGRETMEN',
        payload: { sinifOgretmen: document.getElementById('txtOgretmenAd').value }
      });
    }
  };
};

const SinifConnected = connect(mapStateToProps, mapDispatchToProps)(Siniflar);

export default SinifConnected;
