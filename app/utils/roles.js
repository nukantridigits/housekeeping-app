import { ROLE_SUPERVISOR, ROLE_WORKER } from '../modules/auth/constants';

const isSupervisor = userType => userType === ROLE_SUPERVISOR;
const isWorker = userType => userType === ROLE_WORKER;

export { isSupervisor, isWorker };
