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
