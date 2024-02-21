import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const LoginCard = (props) => {
  return (
    <Card className="w-96">
      <Typography variant="h3" color="black">
        Sign in
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            
            variant="small"
            color="blue-gray"
            className="cursor-pointer ml-1 font-bold"
            onClick={() => props.handleChangeScreen()}
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;