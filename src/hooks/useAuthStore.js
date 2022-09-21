import { useDispatch, useSelector } from "react-redux"

export const useAuthStore = () => {

    const dispatch = useDispatch();

    const { status, errorMessage, user } = useSelector( state => state.auth );

    const statrLogin = async () => {
        // ...
    }

  return {
    // Propiedas
    status, 
    errorMessage, 
    user,
    // Metodos

  }
}
