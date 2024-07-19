import Swal from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
const PR = ({ children, requiredRole}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
            if(decoded.stat !== requiredRole){
                  Swal.fire({
                    title: "Unauthorized Access",
                    text: "You are trying to access unauthorized pages, do you wan to sign using authorized id?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Return to Signin Page",
                    cancelButtonText: "Head back",
                    reverseButtons: true
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Returning to Sign",
                        icon: "success",
                        showConfirmButton: false,
                        timer:2500
                      });
                      localStorage.removeItem('token');
                      navigate('/signin');
                    } else if (result.dismiss === Swal.DismissReason.cancel
                    ) {
                      Swal.fire({
                        title: "Heading Back",
                        icon: "info",
                        showConfirmButton:false,
                        timer:2000,
                        timerProgressBar:true
                      });
                      window.history.back();
                  return null;
                    };
                  });
            }
            else {return children;}
        } else {
            localStorage.removeItem('token');
            Swal.fire({
                icon: "error",
                title: "Session Expired",
                text:"Please Sign in first",
                showConfirmButton: false,
                timer: 2500
              });
            navigate('/signin');
        }
    }else{
        return <Navigate to = "/signin"/>
    }
};

export default PR;
