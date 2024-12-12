import { useCallback } from "react";
import { spaceTwoDbInterface, spaceTwoDbQueryService } from "../db";
import {
  SpaceTwoBaseUser,
  SpaceTwoBrand,
  SpaceTwoDbTables,
  SpaceTwoIndividual,
  SpaceTwoNewUser,
} from "../types";

const useSpaceTwoUsers = () => {
  /* events */
  const getSpaceTwoUserWithEmail = async (
    email: string
  ): Promise<SpaceTwoBaseUser | undefined> => {
    const user = await spaceTwoDbQueryService.getSpaceTwoUser(email);

    return user;
  };

  const createNewSpaceTwoUser = useCallback(
    async (newUser: SpaceTwoNewUser) => {
      try {
        let newUserId;
        // Add the new friend!
        if (newUser.type === "individual") {
          newUserId = await spaceTwoDbInterface.storeDbItem<SpaceTwoIndividual>(
            SpaceTwoDbTables.INDIVIDUALS,
            {
              ...newUser,
            }
          );
        }
        if (newUser.type === "brand") {
          newUserId = await spaceTwoDbInterface.storeDbItem<SpaceTwoBrand>(
            SpaceTwoDbTables.BRANDS,
            {
              ...newUser,
            }
          );
        }
      } catch (e: unknown) {
        throw new Error("error at createNewSpaceTwoUSer");
      }
    },
    []
  );

  return {
    getSpaceTwoUserWithEmail,
    createNewSpaceTwoUser,
  };
};

export default useSpaceTwoUsers;
