export interface SignUpInputType {
  name: string;
  email: string;
  password: string;
  gender: string;
  day: string;
  month: string;
  year: string;
}

interface LoginInputType {
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: { _id: string };
  setCurrentUser: Dispatch<any>;
  signup: (inputs: SignUpInputType) => void;
  login: (inputs: LoginInputType) => void; // Correct type
}
