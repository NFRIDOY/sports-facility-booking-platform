import Swal from "sweetalert2";

export const ErrorAlert = (message="Something went wrong!") => {
    return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
    });
};


