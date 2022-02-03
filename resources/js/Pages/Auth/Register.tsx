import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import React, {useEffect, useState} from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useForm} from '@inertiajs/inertia-react';
import route from 'ziggy-js';

type showPass = 'password' | 'text';

export default function Register() {

  const [showPass, setShowPass] = useState<showPass>('password');
  const [showConfirmPass, setShowConfirmPass] = useState<showPass>('password');

  const {data, setData, post, processing, errors, reset} = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.name as "first_name" | "last_name" | "email" | "password" | "password_confirmation",
      event.target.type === 'checkbox' ? event.target.checked + '' : event.target.value);
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    post(route('register')).then(r => '');
  };

  return (
    <div className="container max-w-5xl mx-auto m-8">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 p-16 py-32">
          <h1 className="text-3xl font-black py-4">Register to Cranium</h1>

          <h3 className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem expedita, facilis
            incidunt minima modi pariatur! Accusantium aspernatur assumenda debitis id rerum?
            Distinctio, dolor nobis nulla quisquam sapiente tempore voluptatibus.</h3>
          <h3>Get Access to:</h3>
          <ul className="list-disc pl-6">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>

        <Guest>
          <ValidationErrors errors={errors}/>

          <form onSubmit={submit}>

            <div className="mt-4 ">
              <Label forInput="firstname" value="First Name"/>

              <Input
                type="text"
                name="firstname"
                value={data.first_name}
                className="mt-2 block w-full"
                autoComplete="firstname"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />
            </div>

            <div className="mt-4">

              <Label forInput="lastname" value="Last Name"/>

              <Input
                type="text"
                name="lastname"
                value={data.last_name}
                className="mt-2 block w-full"
                autoComplete="lastname"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />
            </div>

            <div className="mt-4">
              <Label forInput="email" value="Email"/>

              <Input
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                handleChange={onHandleChange}
                required
              />
            </div>

            <div className="py-2">
              <Label forInput="password" value="Password"/>

              <Input
                type={showPass}
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                handleChange={onHandleChange}
                required
              />
              <input
                type={"checkbox"}
                id={'show_password'}
                className="rounded-md"
                onChange={() => showPass === 'password' ? setShowPass('text') : setShowPass('password')}/>
              <label htmlFor={'show_password'} className="text-xs text-gray-700 p-2">Show Password</label>
            </div>

            <div className="mt-4">
              <Label forInput="password_confirmation" value="Confirm Password"/>

              <Input
                type={showConfirmPass}
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                handleChange={onHandleChange}
                required
              />
              <input type={"checkbox"} id={'show_confirm_password'} className="rounded-md"
                     onChange={() => showConfirmPass === 'password' ? setShowConfirmPass('text') : setShowConfirmPass('password')}/>
              <label htmlFor={'show_confirm_password'} className="text-xs text-gray-700 p-2">Show Confirmation Password</label>
            </div>

            <Button className="w-full mt-4 btn-primary justify-center" processing={processing}>
              Register
            </Button>

            <div className="items-center justify-self: center mt-4 text-center">
              <InertiaLink href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                Already registered?
              </InertiaLink>
            </div>

          </form>
        </Guest>
      </div>
    </div>

  );
}
