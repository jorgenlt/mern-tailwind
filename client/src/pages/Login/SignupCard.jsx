import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignupCard = (props) => {
  return (
    <Card className="w-96">
      <Typography variant="h3" color="black">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <CardBody className="">
        <form className="flex flex-col gap-4 mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?{" "}
            <Typography
            as="a"
            
            variant="small"
            color="blue-gray"
            className="cursor-pointer ml-1 font-bold"
            onClick={() => props.handleChangeScreen()}
          >
            Sign in
          </Typography>
          </Typography>
        </form>
      </CardBody>
    </Card>
  );
};

export default SignupCard;
