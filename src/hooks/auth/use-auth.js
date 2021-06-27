import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const DEFAULT_VALUE = {
  createdAt: '2021-06-26T05:38:24.339Z',
  name: 'Harold Douglas',
  avatar: 'https://cdn.fakercloud.com/avatars/scottkclark_128.jpg',
  id: '1',
};

function useProvideAuth() {
  const [user, setUser] = useState(DEFAULT_VALUE);

  return { user, setUser };
}

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
