import { spaceTwoDb } from ".";
import { mapErrorMessage } from "../helpers";
import {
  SpaceTwoBaseUser,
  SpaceTwoDbTables,
  SpaceTwoIndividual,
} from "../types";

export class SpaceTwoDbQueryService {
  async getSpaceTwoUser(email: string): Promise<SpaceTwoBaseUser | undefined> {
    try {
      const individualUser = await spaceTwoDb
        .table<SpaceTwoIndividual>(SpaceTwoDbTables.INDIVIDUALS)
        .where("email")
        .equals(email)
        .first();
      return individualUser as SpaceTwoBaseUser;
    } catch (e: unknown) {
      throw Error(mapErrorMessage(e, `Error retrieving session from DB`));
    }
  }
  //   async deleteDriverSession(): Promise<void> {
  //     try {
  //       await spaceTwoDbInterface.deleteDbCollection<DriverSessionLog>(DriversDbTables.DRIVER_SESSION);
  //       return Promise.resolve();
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error deleting session from DB`));
  //     }
  //   }
  //   async createRoundPermissionForDriver(permissionLog: RoundPermissionLog): Promise<IndexableType> {
  //     try {
  //       const permission = await spaceTwoDbInterface.storeDbItem<RoundPermissionLog>(
  //         DriversDbTables.ROUND_PERMISSIONS,
  //         permissionLog
  //       );
  //       return permission;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(
  //           e,
  //           `Error creating new permission for round: ${permissionLog.roundId} and driver: ${permissionLog.driverId} in the DB`
  //         )
  //       );
  //     }
  //   }
  //   async getRoundPermissionForDriver(roundId: IApiId, driverId: IApiId): Promise<RoundPermissionLog | undefined> {
  //     try {
  //       let permission = await spaceTwoDb
  //         .table<RoundPermissionLog>(DriversDbTables.ROUND_PERMISSIONS)
  //         .where('roundId')
  //         .equals(roundId)
  //         .and((roundPermission: RoundPermissionLog) => roundPermission.driverId === driverId)
  //         .first();
  //       // if the permission is not valid, delete it
  //       if (!!permission && !validateRoundPermission(permission)) {
  //         await spaceTwoDbInterface.deleteDbItem(DriversDbTables.ROUND_PERMISSIONS, permission.id as any);
  //         permission = undefined;
  //       }
  //       return permission;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(e, `Error retrieving permission for round: ${roundId} and driver: ${driverId} in the DB`)
  //       );
  //     }
  //   }
  //   async deleteRoundPermissionForDriver(roundId: IApiId, driverId: IApiId): Promise<number> {
  //     try {
  //       const deletedPermission = spaceTwoDb
  //         .table<RoundPermissionLog>(DriversDbTables.ROUND_PERMISSIONS)
  //         .where('roundId')
  //         .equals(roundId)
  //         .and((roundPermission: RoundPermissionLog) => roundPermission.driverId === driverId)
  //         .delete();
  //       return deletedPermission;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(e, `Error deleting round permission for round: ${roundId} and driver: ${driverId} in the DB`)
  //       );
  //     }
  //   }
  //   async deleteRoundPermissionsForDriver(driverId: IApiId): Promise<number> {
  //     try {
  //       const deletedPermissions = spaceTwoDb
  //         .table<RoundPermissionLog>(DriversDbTables.ROUND_PERMISSIONS)
  //         .where('driverId')
  //         .equals(driverId)
  //         .delete();
  //       return deletedPermissions;
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error deleting round permission for driver: ${driverId} in the DB`));
  //     }
  //   }
  //   async saveRoundRoute(roundRoute: RoundRouteLog): Promise<void> {
  //     try {
  //       await spaceTwoDbInterface.storeDbItem<RoundRouteLog>(DriversDbTables.ROUND_ROUTES, roundRoute);
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error saving round route to the DB`));
  //     }
  //   }
  //   async getRouteDirections(roundId: IApiId): Promise<RoundRoute | undefined> {
  //     try {
  //       const routeLog = await spaceTwoDb
  //         .table<RoundRouteLog>(DriversDbTables.ROUND_ROUTES)
  //         .where('roundId')
  //         .equals(roundId)
  //         .first();
  //       return routeLog ? JSON.parse(routeLog.route) : undefined;
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error retrieving route directions`));
  //     }
  //   }
  //   async deleteRouteDirections(roundId: IApiId): Promise<number> {
  //     try {
  //       const deletedRouteDirections = spaceTwoDb
  //         .table<RoundRouteLog>(DriversDbTables.ROUND_ROUTES)
  //         .where({ roundId })
  //         .delete();
  //       return deletedRouteDirections;
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error deleting round directions for round: ${roundId} in the DB`));
  //     }
  //   }
  //   async deleteAllRouteDirections(): Promise<void> {
  //     try {
  //       const deletedRouteDirections = spaceTwoDb.table<RoundRouteLog>(DriversDbTables.ROUND_ROUTES).clear();
  //       return deletedRouteDirections;
  //     } catch (e: unknown) {
  //       throw Error(mapErrorMessage(e, `Error deleting round directions for all rounds} in the DB`));
  //     }
  //   }
  //   async createVanCheck(vanCheckLog: VanCheckLog): Promise<IndexableType> {
  //     try {
  //       const vanCheck = await spaceTwoDbInterface.storeDbItem<VanCheckLog>(DriversDbTables.VAN_CHECK, vanCheckLog);
  //       return vanCheck;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(
  //           e,
  //           `Error creating new van check for round: ${vanCheckLog.roundId} and driver: ${vanCheckLog.driverId} in the DB`
  //         )
  //       );
  //     }
  //   }
  //   async getVanCheck(roundId: IApiId, driverId: IApiId): Promise<VanCheckLog | undefined> {
  //     try {
  //       const vanCheck = await spaceTwoDb
  //         .table<VanCheckLog>(DriversDbTables.VAN_CHECK)
  //         .where({ roundId, driverId })
  //         .last();
  //       return vanCheck;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(e, `Error retrieving van check for round: ${roundId} and driver: ${driverId} in the DB`)
  //       );
  //     }
  //   }
  //   async deleteVanCheck(roundId: IApiId, driverId: IApiId): Promise<number> {
  //     try {
  //       const deletedVanCheck = spaceTwoDb
  //         .table<VanCheckLog>(DriversDbTables.VAN_CHECK)
  //         .where({ roundId, driverId })
  //         .delete();
  //       return deletedVanCheck;
  //     } catch (e: unknown) {
  //       throw Error(
  //         mapErrorMessage(e, `Error deleting van check for round: ${roundId} and driver: ${driverId} in the DB`)
  //       );
  //     }
  //   }
}
