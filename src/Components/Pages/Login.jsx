import { useUser } from "../../Context/UserContext";
import { useForm } from "react-hook-form";
export default function Login() {
  // implemetation of useForm for mangin form state and validation
  const { user, login } = useUser();
  const { register,handleSubmit, formState: { errors }} = useForm();

  if(user) return null;

  const onSubmit = (data)=>{
    console.log(data);
    login(data.mail,data.password);
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Punto-Pro img-Logo"
            src="/src/assets/PuntoPro-imgLogo.png"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-text">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-text">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={`block w-full rounded-md px-3 py-1.5  text-text outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.mail ? ' bg-red-100 outline-red-700 focus:outline-red-700' : 'bg-background outline-primary focus:outline-primary'}`}
                  {...register("mail", { required: true, pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                />
                {errors.mail && <p className="text-red-700 text-sm">Revisa estar escribiendo correctamente el correo</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-text">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className={`block w-full rounded-md bg-background px-3 py-1.5 text-base text-text outline-1 -outline-offset-1 outline-primary focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 ${errors.password ? ' bg-red-100 outline-red-700 focus:outline-red-700' : 'bg-background outline-primary focus:outline-primary'}`}
                  {...register("password", { required: true, minLength: 6, maxLength: 8, pattern: /^(?=.*[a-zA-Z])(?=.*\d).{6,8}$/ })}
                />
                {errors.password && <p className="text-red-700 text-sm">La contraseña debe tener entre 6 y 8 caracteres, al menos una letra y un número</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-background shadow-xs hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}