import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "../hooks";
import useSpaceTwoUsers from "../hooks/useSpaceTwoUsers";
import { useAuthContext } from "../providers";
import { SpaceTwoNewUser, UserTypes } from "../types";
import { APP_ROUTES } from "../routing";

const CreateAccount: React.FC = () => {
  const { setUser } = useAuthContext();
  const { createNewSpaceTwoUser } = useSpaceTwoUsers();
  const navigate = useNavigate();

  const newUserDetails: any = useQuery();

  const [newUser, setNewUser] = useState<SpaceTwoNewUser>({
    ...newUserDetails,
    handle: "",
  });

  useEffect(() => {
    if (newUserDetails) {
      setNewUser((currentNewUser) => ({
        ...currentNewUser,
        ...newUserDetails,
      }));
    }
  }, [newUserDetails]);

  const handleInputRef = useRef<HTMLInputElement>();

  /* events */
  const handleUpdateNewUser = (newDetails: any) => {
    setNewUser((currentNewUser) => ({
      ...currentNewUser,
      ...newDetails,
    }));
  };

  const handleSelectIndividualType = () => {
    handleUpdateNewUser({ type: UserTypes.INDIVIDUAL });
  };

  const handleSelectBrandType = () => {
    handleUpdateNewUser({ type: UserTypes.INDIVIDUAL });
  };

  const handleUpdateHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleUpdateNewUser({ handle: `${handleInputRef?.current?.value || ""}` });
  };

  const handleCreateAccount = useCallback(async () => {
    const user = await createNewSpaceTwoUser(newUser);

    setUser(user);
    navigate(`${APP_ROUTES.DASHBOARD}/${user.handle}`);
  }, [newUser, createNewSpaceTwoUser, setUser, navigate]);

  return (
    <Container maxWidth="md">
      <Typography variant="h5">
        {newUser.name}, welcome! Let's create your account
      </Typography>
      <Box my={4}>
        <Typography> Select your type of account</Typography>
        <Stack gap={4} direction="row">
          <Button onClick={handleSelectIndividualType}>Creator</Button>
          <Button onClick={handleSelectBrandType}>Brand/Organisation</Button>
        </Stack>
      </Box>
      {newUser.type === UserTypes.INDIVIDUAL && (
        <Stack gap={2} maxWidth={460} justifyContent="center">
          <TextField
            name="new-individual__name"
            value={newUser.name}
            label="Your name"
          />
          <TextField
            name="new-individual__email"
            value={newUser.email}
            label="Your email"
          />
          <TextField
            name="new-individual__telephone"
            value={newUser.telephone}
            label="Your phone number"
          />
          <TextField
            name="new-individual__handle"
            value={`${newUser.handle}`}
            label="Pick your handle"
            onChange={handleUpdateHandle}
            inputRef={handleInputRef}
          />
          <Button onClick={handleCreateAccount}>Create account</Button>
        </Stack>
      )}
      {newUser.type === UserTypes.BRAND && (
        <Box>
          <TextField
            name="new-brand__name"
            value={newUser.name}
            label="Your brand name"
          />
          <TextField
            name="new-brand__email"
            value={newUser.email}
            label="Your email"
          />
          <TextField
            name="new-brand__telephone"
            value={newUser.telephone}
            label="Your phone number"
          />
          <TextField
            name="new-brand__handle"
            value={`@${newUser.handle}`}
            label="Pick your handle"
          />
        </Box>
      )}
    </Container>
  );
};

export default CreateAccount;
