/*
 *
 * AmenitiesPage actions
 *
 */
export const INCREASE_AMENITY = 'app/AmenitiesPage/INCREASE_AMENITY';
export function increaseAmenity(payload) {
  return {
    type: INCREASE_AMENITY,
    payload,
  };
}

export const DECREASE_AMENITY = 'app/AmenitiesPage/DECREASE_AMENITY';
export function decreaseAmenity(payload) {
  return {
    type: DECREASE_AMENITY,
    payload,
  };
}

export const MASS_INCREASE_AMENITY = 'app/AmenitiesPage/MASS_INCREASE_AMENITY';
export function massIncreaseAmenity(payload) {
  return {
    type: MASS_INCREASE_AMENITY,
    payload,
  };
}

export const ADD_AMENITIES_REQUEST = 'app/AmenitiesPage/ADD_AMENITIES_REQUEST';
export function addAmenitiesRequest() {
  return {
    type: ADD_AMENITIES_REQUEST,
  };
}

export const GET_AMENITES_REPORT_REQUEST =
  'app/AmenitiesPage/GET_AMENITES_REPORT_REQUEST';
export function getAmenitesReportRequest() {
  return { type: GET_AMENITES_REPORT_REQUEST };
}

export const SET_AMENITIES_REPORT = 'app/AmenitiesPage/SET_AMENITIES_REPORT';
export function setAmenitiesReport(payload) {
  return { type: SET_AMENITIES_REPORT, payload };
}

export const CLEAR_AMENITIES = 'app/AmenitiesPage/CLEAR_AMENITIES';
export function clearAmenities() {
  return { type: CLEAR_AMENITIES };
}
