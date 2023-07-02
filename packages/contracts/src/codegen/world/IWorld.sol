// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

import { IBaseWorld } from "@latticexyz/world/src/interfaces/IBaseWorld.sol";

import { IAutoBattleSystem } from "./IAutoBattleSystem.sol";
import { IIncrementSystem } from "./IIncrementSystem.sol";
import { IJoinGameSystem } from "./IJoinGameSystem.sol";

/**
 * The IWorld interface includes all systems dynamically added to the World
 * during the deploy process.
 */
interface IWorld is IBaseWorld, IAutoBattleSystem, IIncrementSystem, IJoinGameSystem {

}
