import { SAVE_BUS_DATA, REMOVE_BUS_DATA } from "./bus.actiontypes";

export const removeData = () => ({ type: REMOVE_BUS_DATA });

export const saveData = (data) => ({ type: SAVE_BUS_DATA, payload: data });
