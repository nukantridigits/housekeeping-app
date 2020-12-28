import {
  HOUSEKEEPING_API_URL,
  POST,
  headers,
  GET,
  DELETE,
  PUT,
} from './constants';
// eslint-disable-next-line no-unused-vars

const authRequest = request =>
  fetch(`${HOUSEKEEPING_API_URL}/auth/login`, {
    method: POST,
    headers,
    body: JSON.stringify(request),
  }).then(response => response.json());

const getStatusesRequest = token =>
  fetch(`${HOUSEKEEPING_API_URL}/api/statuses`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const getRoomsRequest = (token, { id, name, user }) =>
  fetch(
    `${HOUSEKEEPING_API_URL}/api/rooms?user=${user}&name=${name}&id=${id}`,
    {
      method: GET,
      headers: { ...headers, Authorization: `Bearer ${token}` },
    },
  ).then(response => response.json());

const getTasksRequest = token =>
  fetch(`${HOUSEKEEPING_API_URL}/api/tasks`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const getRoomRequest = (token, id) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/rooms/${id}`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const getBooksRequest = (book, token) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/${book}`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const reportsRequest = (report, token, body) =>
  fetch(`http://localhost:9000/api/get-${report}-stats`, {
    method: POST,
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).then(response => response.json());

const postBooksRequest = (book, body, token) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/${book}`, {
    method: POST,
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).then(response => response.json());

const deleteBooksRequest = (book, id, token) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/${book}/${id}`, {
    method: DELETE,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const updateBookDataByIdRequest = (book, id, token, body) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/${book}/${id}`, {
    method: PUT,
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).then(response => response.json());

const getAmenitiesListRequest = token =>
  fetch(`${HOUSEKEEPING_API_URL}/api/amenities`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

const setAmenitiesRequest = (token, body) =>
  fetch(`${HOUSEKEEPING_API_URL}/api/amenities/stat`, {
    method: POST,
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).then(response => response.json());

const getAmenitiesReportRequest = (token, userName) =>
  fetch(`http://localhost:9000/api/amenities/stat/${userName}`, {
    // fetch(`${HOUSEKEEPING_API_URL}/api/amenities/stat/${userName}`, {
    method: GET,
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(response => response.json());

export {
  authRequest,
  getRoomsRequest,
  getStatusesRequest,
  getTasksRequest,
  getRoomRequest,
  getBooksRequest,
  reportsRequest,
  postBooksRequest,
  deleteBooksRequest,
  updateBookDataByIdRequest,
  getAmenitiesListRequest,
  setAmenitiesRequest,
  getAmenitiesReportRequest,
};
