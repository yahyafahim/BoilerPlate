import { store } from '../store';

export type RootState = ReturnType<typeof store.getState>;

export type UserType = {
  displayName: string | null; // displayName can be null if the user hasn't set it
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null; // phoneNumber can be null
  photoURL: string;
  providerId: string;
  uid: string;
};
