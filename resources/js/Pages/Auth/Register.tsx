import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import React, {useEffect} from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useForm} from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function Register() {
  const {data, setData, post, processing, errors, reset} = useForm({
    firstname: '',
    lastname: '',
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
    setData(event.target.name as "firstname" | "lastname" | "email" | "password" | "password_confirmation", event.target.type === 'checkbox' ? event.target.checked + '' : event.target.value);
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    post(route('register')).then(r => '');
  };

  return (
    <Guest>
      <ValidationErrors errors={errors}/>

      <form onSubmit={submit}>
        <div>
          <Label forInput="firstname" value="First Name"/>

          <Input
            type="text"
            name="firstname"
            value={data.firstname}
            className="mt-1 block w-full"
            autoComplete="firstname"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />

          <Label forInput="lastname" value="Last Name"/>

          <Input
            type="text"
            name="lastname"
            value={data.lastname}
            className="mt-1 block w-full"
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

        <div className="mt-4">
          <Label forInput="password" value="Password"/>

          <Input
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="mt-4">
          <Label forInput="password_confirmation" value="Confirm Password"/>

          <Input
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <InertiaLink href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
            Already registered?
          </InertiaLink>

          <Button className="ml-4" processing={processing}>
            Register
          </Button>
        </div>
      </form>
    </Guest>
  );
}
