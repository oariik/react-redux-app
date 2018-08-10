import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ogrenciler extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Öğrenciler</b>
        </p>
        Ad : <input id="txtOgrenciAd" type="text" onChange={this.props.degistirOgrenciAdi} />
        <br />
        Soyad : <input id="txtOgrenciSoyad" type="text" onChange={this.props.degistirOgrenciSoyadi} />
        <br />
        <button onClick={this.props.ekleOgrenci}>Ekle</button>
        <br />
        <ul>
          {this.props.ogrenciler.map(ogrenci => {
            const key = ogrenci.ogrenciAd + ogrenci.ogrenciSoyad;
            return <ol key={key}>{ogrenci.ogrenciAd} {ogrenci.ogrenciSoyad}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ogrenciAd: state.ogrenciReducer.ogrenciAd,
    ogrenciSoyad: state.ogrenciReducer.ogrenciSoyad,
    ogrenciler: state.ogrenciReducer.ogrenciler
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    degistirOgrenciAdi: ad => {
      dispatch({ type: 'OGRENCI.DEGISTIR_AD', payload: { ogrenciAd: document.getElementById('txtOgrenciAd').value } });
    },
    degistirOgrenciSoyadi: ad => {
      dispatch({
        type: 'OGRENCI.DEGISTIR_SOYAD',
        payload: { ogrenciSoyad: document.getElementById('txtOgrenciSoyad').value }
      });
    },
    ekleOgrenci: () => {
      dispatch({ type: 'OGRENCI.EKLE' });
    }
  };
};

const OgrencilerConnected = connect(mapStateToProps, mapDispatchToProps)(Ogrenciler);

export default OgrencilerConnected;
