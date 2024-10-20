import { useDispatch, useSelector } from "react-redux";
import { Auth, Home } from "./pages";
import { checkIsAuthenticated } from "../store";
import { useEffect } from "react";

export default function Index() {
    
    const { authenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkIsAuthenticated())
    }, [])

    return (
        <>
            { authenticated ? <Home /> : <Auth /> }
        </>
    )
}