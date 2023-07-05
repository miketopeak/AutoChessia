import { useComponentValue, useRows } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { formatBytes32String } from 'ethers/lib/utils';
import AutoChess from './ui/ChessMain'
import JoinGame from "./ui/JoinGame";
import './index.css'


export const App = () => {
  const {
    components: { Counter, Board, Game, PieceInBattle, Piece, Creatures, CreatureConfig, Player, ShopConfig, GameConfig, WaitingRoom },
    systemCalls: { increment, joinRoom, autoBattle, buyRefreshHero, buyHero, sellHero, buyExp, placeToBoard, changePieceCoordinate, placeBackInventory, checkCorValidity },
    network: { singletonEntity, localAccount, playerEntity, network, singletonEntityId, storeCache },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);
  const playerObj = useComponentValue(Player, playerEntity);

  //todo 大厅多玩家任意匹配
  const WaitingRoomList = useRows(storeCache, { table: "WaitingRoom" });
  const OwnRoom = WaitingRoomList.some(room => room.value.player1 == localAccount)


  const isPlay = playerObj?.status == 1

  // console.log(OwnRoom, 'OwnRoom')
  // console.log(localAccount, 'localAccount', playerEntity, singletonEntity);
  // console.log(WaitingRoomList, 'WaitingRoomList')

  const params = new URLSearchParams(window.location.search);

  const roomId=params?.get("roomId")

  console.log(`now roomId${roomId}`)

  // const roomId = 'mud1';
  const bytes32Str = formatBytes32String(roomId!);

  return (
    <>
      {isPlay
        ? <AutoChess />
        :<JoinGame initRoomId={roomId} roomId={bytes32Str} />
      }
      {/* <JoinGame roomId={bytes32Str} /> */}
    </>
  );
};
