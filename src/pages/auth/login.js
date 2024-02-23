import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Banner from "../../asset/png/banner.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Logo from "@/asset/png/logo.jpeg";
import Image from "next/image";

function Login() {
  return (
    <div className="flex justify-between ">
      <div
        className="w-[100%] lg:block hidden "
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white flex justify-center  items-center backdrop-opacity-20 backdrop-invert bg-black/10 h-[100vh]">
          <div className="flex">
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-5xl text-white font-bold">
            Order Food And Reservation
          </span>
          </div>
        
        </div>
      </div>
      
      <div className="lg:p-20 h-[100vh]  lg:bg-gradient-to-l from-primary to-white w-full lg:w-[60%] flex justify-center  items-center">
        <Card className="p-4 lg:bg-white w-full lg:shadow-lg shadow-none">
          
          <Typography variant="h4" color="indigo">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Access Your World with Ease
          </Typography>
          <form className="mt-2  max-w-screen-lg ">
            <div className=" flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Your Email
              </Typography>
              <Input
                placeholder="Email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Password
              </Typography>
              <Input
                type="password"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                icon={<FaRegEyeSlash />}
              />
            </div>

            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Forget your Password?
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Click Here
              </a>
            </Typography>

            <Button
              className="mt-6 bg-primary"
              fullWidth
            >
              sign in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Didnt have an account?{" "}
              <a href="/auth/register" className="font-medium text-gray-900 ">
                Sign Up
              </a>
            </Typography>
          </form>
          <div>
            <p className="text-center ">Or Continue With</p>
            <div className="flex gap-2 justify-center">
              <Button className="mt-2 bg-white ">
                <FcGoogle size="25" />
              </Button>
              <Button className="mt-2 bg-white">
                <div className="bg-blue-800 p-1 rounded-full">
                  <FaFacebookF size="20" />
                </div>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default Login;
