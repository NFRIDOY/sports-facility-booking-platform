import Swal from "sweetalert2";

export const SuccessAlert = async (message = "Successful") => {
    return await Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500,
    });
};
