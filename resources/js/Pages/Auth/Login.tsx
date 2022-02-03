import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import React, {useEffect, useState} from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useForm} from '@inertiajs/inertia-react';
import route from 'ziggy-js';

interface Props {
  status: string;
  canResetPassword: boolean;
}
type showPass = 'password' | 'text';
export default function Login({status, canResetPassword}: Props) {

  const [showPass, setShowPass] = useState<showPass>('password');

  const {data, setData, post, processing, errors, reset} = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.name as "email" | "password" | "remember", event.target.type === 'checkbox' ? event.target.checked + '' : event.target.value);
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    post(route('login')).then(r => '');
  };

  return (
    <nav>
      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <ValidationErrors errors={errors}/>

      <form onSubmit={submit}>
        <div
          className="w-full sm:max-w-md mt-48 ml-auto mr-auto px-6 py-4 shadow-md overflow-hidden sm:rounded-lg bg-gray-100">
          <div className="sm:max-w-md px-8 py-4 flex flex-col justify-center items-center sm:items-center">
            <Label forInput="email" value="Email"/>

            <Input
              type="text"
              name="email"
              value={data.email}
              className="mt-2 block w-full mb-2"
              autoComplete="username"
              isFocused={true}
              handleChange={onHandleChange}
            />

            <Label forInput="password" value="Password"/>

            <Input
              type={showPass}
              name="password"
              value={data.password}
              className="mt-2 block w-full"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />

            <label htmlFor={'show_password'}>
              <input type={"checkbox"} id={'show_password'}
                     onChange={() => showPass === 'password' ? setShowPass('text') : setShowPass('password')}/>
              Show Password
            </label>

            <div className="block mt-4">
              <label className="flex items-center">
                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange}/>

                <span className="ml-4 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <div className="flex items-center justify-end mt-4">
              {canResetPassword && (
                <InertiaLink
                  href={route('password.request')}
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot your password?
                </InertiaLink>
              )}

              <Button className="ml-4" processing={processing}>
                Log in
              </Button>
            </div>
          </div>
        </div>
      </form>
    </nav>
  );
}
