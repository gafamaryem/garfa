export const RETRIEVE_ANNONCE = "RETRIEVE_ANNONCE";

const initialState = [
  { value: 23, label: "En ligne", id: 1, icon: "check_box", color: "#28C76F" },
  { value: 23, label: "Brouillon", id: 2, icon: "download_done", color: "#EA5455" },
  { value: 23, label: "Désactivées", id: 3, icon: "transcribe", color: "#5E5873" },
  { value: 23, label: "Expirées", id: 4, icon: "patient_list", color: "#28DAC6" },
  { value: 23, label: "Archivées", id: 5, icon: "face", color: "#03C3EC" },
];

const annonce = (annonces = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ANNONCE:
      return payload;

    default:
      return annonces;
  }
};

export default annonce;
