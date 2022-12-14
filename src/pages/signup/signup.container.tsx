import React, { useState } from 'react';
import { fetchLib, stringLib } from 'libs';
import { toast } from 'react-toastify';
import { authInterface } from 'interfaces';
import { useNavigate } from 'react-router-dom';
import SignUp from './signup';

function SignUpContainer() {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setInput({ ...input, [name]: value });
  };
  const onClick = async () => {
    if (!stringLib.validationInput(input.email, input.password)) toast.error('유효하지 않은 입력입니다.');
    else {
      try {
        const response = await fetchLib.fetchPost<
          authInterface.userInfoInterface,
          authInterface.signUpResponseInterface
        >('users/create', { ...input });
        if (response.token) {
          toast.success('가입 완료');
          navigate('/auth');
        } else toast.error(response.details);
      } catch (error: any) {
        toast.error(error.details);
      }
    }
  };
  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') onClick();
  };
  return <SignUp onClick={onClick} onChangeInput={onChangeInput} onEnter={onEnter} />;
}
export default SignUpContainer;
