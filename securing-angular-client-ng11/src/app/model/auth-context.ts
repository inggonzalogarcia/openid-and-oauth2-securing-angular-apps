import { UserProfile } from './user-profile';
import { SimpleClaim } from './simple-claim';

export class AuthContext {
  claims: SimpleClaim[];
  userProfile: UserProfile;
}