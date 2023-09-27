import { CanActivateChildFn } from '@angular/router';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  if('token' in localStorage){

    return false;
  }
  else{
    return true;
  }
};
