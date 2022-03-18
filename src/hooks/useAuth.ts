import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from '../hooks/useLoginUser';

export const useAuth = () => {
  const history = useHistory();
  const { showMessege } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessege({ title: 'ログインしました', status: 'success' });
            history.push('/home');
          } else {
            showMessege({ title: 'ユーザーが見つかりません', status: 'error' });
          }
        })
        .catch(() =>
          showMessege({ title: 'ログインできません', status: 'error' })
        )
        .finally(() => setLoading(false));
    },
    [history, showMessege, setLoginUser]
  );
  return { login, loading };
};
