import Swal from "sweetalert2";

export const SuccessAlert = (message = "Successful") => {
    return Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500,
    });
};
