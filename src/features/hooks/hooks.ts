import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../../store/store";

export const appSelector = useSelector.withTypes<RootState>() //para los states
export const appDispatch = useDispatch.withTypes<AppDispatch>()
export const appStore = useStore.withTypes<AppStore>()