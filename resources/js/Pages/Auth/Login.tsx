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
              <input type={"checkbox"} id={'show_password'} className="rounded-md"
                     onChange={() => showPass === 'password' ? setShowPass('text') : setShowPass('password')}/>
              <span className="text-xs text-gray-600 p-2" >Show Password</span>
            </label>

            <div className=" flex justify-center items-center ">
              <label >
                <input type={"checkbox"} className="rounded-md" name="remember" value={data.remember} onChange={onHandleChange}/>

                <span className="text-xs text-gray-600 p-2">Remember me</span>
              </label>
              {canResetPassword && (
                <InertiaLink
                  href={route('password.request')}
                  className="p-2 text-xs text-gray-600 hover:text-gray-900"
                >
                  Forgot your password?
                </InertiaLink>
              )}
            </div>
              <Button className="btn-primary justify-center my-4" processing={processing}>
                Log in
              </Button>
            </div>
          </div>
      </form>
    </nav>
  );
}
