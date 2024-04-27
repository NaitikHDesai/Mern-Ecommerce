import { api } from "../../config/apiConfig";
import { UPDATE_CART_ITEM_REQUEST } from "../Cart/ActionType";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const createPayment=(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST});

    try {
        const {data}=await api.post(`/api/payments/${orderId}`,{});

        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message});
    }
}



export const updatePayment = (reqData) => {
    return async (dispatch) => {
      console.log("update payment reqData ",reqData)
      dispatch(updatePaymentRequest());
      try {
        
        const response = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("updated data ---- ",response.data)
        dispatch(updatePaymentSuccess(response.data));
      } catch (error) {
        dispatch(UPDATE_PAYMENT_FAILURE(error.message));
        console.log("catch error ",error)
      }
    };
  };

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};