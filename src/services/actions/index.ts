import { TCreateUserAction } from './create-user';
import { TConstuctorAction } from './constructor';
import { TIngredientsDetails } from './ingredient-details';
import { TGetIngredients } from './ingredients';
import { TLoginUser } from './login-user';
import { TGetOrderId } from './order-details';
import { TGetNewPassword } from './recover-password';
import { TSetNewPassword } from './reset-password';
import { TTabs } from './tabs';
import { TUserInfo } from './user-info';
import { TWsActions } from './all-socket';
import { TUserWsActions } from './user-socket';
import { IUserSocketActions } from './user-socket';
import { ISocketActions } from './all-socket';

export type TUnionAction =
  | TCreateUserAction
  | TConstuctorAction
  | TIngredientsDetails
  | TGetIngredients
  | TLoginUser
  | TGetOrderId
  | TGetNewPassword
  | TSetNewPassword
  | TTabs
  | TUserInfo
  | TWsActions
  | TUserWsActions

export type TMiddleware =
  | IUserSocketActions
  | ISocketActions
