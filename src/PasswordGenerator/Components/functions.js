import { toast } from "react-toastify";

export const notify = (message, hasError = false) => {
  if (hasError) {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const copyToClipboard = (password) => {
  const newTextArea = document.createElement("textarea");
  newTextArea.innerText = password;
  document.body.appendChild(newTextArea);
  newTextArea.select();
  document.execCommand("copy");
  newTextArea.remove();
};

export const createPassword = (characterList, passwordLength) => {
  let password = "";
  const characterListLength = characterList.length;

  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.round(Math.random() * characterListLength);
    password = password + characterList.charAt(characterIndex);
  }
  return password;
};
