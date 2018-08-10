const initialState = {
  ogrenciAd: '',
  ogrenciSoyad: '',
  ogrenciler: []
};

export const ogrenciReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'OGRENCI.DEGISTIR_AD':
      const ad = Object.assign({}, state, { ogrenciAd: action.payload.ogrenciAd });
      return ad;
    case 'OGRENCI.DEGISTIR_SOYAD':
      const soyad = Object.assign({}, state, { ogrenciSoyad: action.payload.ogrenciSoyad });
      return soyad;
    case 'OGRENCI.EKLE':
      const yeniOgrenci = { ogrenciAd: state.ogrenciAd, ogrenciSoyad: state.ogrenciSoyad};
      const yeniListe = [...state.ogrenciler, yeniOgrenci];
      const liste = Object.assign({}, state, { ogrenciler: yeniListe });
      return liste;

    default:
      return state;
  }
};
