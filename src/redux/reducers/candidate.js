export const RETRIEVE_CANDIDATE = "RETRIEVE_CANDIDATE";

const initialState = [
  { value: 120, label: "Candidatures", id: 1 },
  { value: 64, label: "Nouveaux Profile", id: 2 },
  { value: 64, label: "Dossiers interessants", id: 3 },
  { value: 535, label: "Dossiers Favoris", id: 4 },
];

const candidate = (cadidates = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CANDIDATE:
      return payload;

    default:
      return cadidates;
  }
};

export default candidate;
