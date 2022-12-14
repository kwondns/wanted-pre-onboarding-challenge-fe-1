import React from 'react';
import { authInterface } from 'interfaces';
import { AuthTemplate } from 'templates';

function SignUp(props: authInterface.SignUpInterface): JSX.Element {
  const { onClick, onChangeInput, onEnter } = props;
  return (
    <AuthTemplate
      onClick={onClick}
      title="회원가입"
      navigator="뒤로가기"
      location="/auth"
      submit="회원가입"
      onChangeInput={onChangeInput}
      onEnter={onEnter}
    />
  );
}

export default SignUp;
