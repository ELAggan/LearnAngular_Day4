import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  if('token' in localStorage){

    return true;
  }
  else{
    return false;
  }
};
