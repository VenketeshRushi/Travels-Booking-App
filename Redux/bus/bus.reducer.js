import { SAVE_BUS_DATA, REMOVE_BUS_DATA } from "./bus.actiontypes";

export const busInitalState = {
  data: [],
  backupdata: [],
};

export const busReducer = (state = busInitalState, { type, payload }) => {
  switch (type) {
    case SAVE_BUS_DATA:
      console.log("payload for savedata", payload);
      return {
        ...state,
        data: payload,
        backupdata: payload,
      };

    case REMOVE_BUS_DATA:
      console.log("rmoved bus data");
      return {
        ...state,
        data: [],
        backupdata: [],
      };

    default: {
      return state;
    }
  }
};
