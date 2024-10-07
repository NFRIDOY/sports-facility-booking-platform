import Swal from "sweetalert2";

export const ErrorAlert = async (message="Something went wrong!") => {
    return await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
    });
};


