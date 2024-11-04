import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { setOrders, setLoading, setOrder, setIsFetchingOrder } from "./ordersSlice";

export const getOrders = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const user = auth().currentUser;
            const allOrders = []
            const snapshot = await firestore()
            .collection("orders")
            .get()

            snapshot.docs.forEach(doc => {
                allOrders.push(doc.data());
            });
            
            const orders = allOrders.filter(order => order.user.uid === user.uid);
            dispatch(setOrders(orders));

            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            console.error(error);
        }
    }
}

export const getOrder = (orderId) => { 
    return async (dispatch) => {
        try {
            dispatch(setIsFetchingOrder(true));
            const snapshot = await firestore()
            .collection("orders")
            .doc(orderId)
            .get();

            const order = snapshot.data();
            
            dispatch(setOrder(order));
            dispatch(setIsFetchingOrder(false));
        } catch (error) {
            dispatch(setLoading(false));
            console.error(error);
        }
    }
}