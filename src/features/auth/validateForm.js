export const signupValidate = (initialInput, formError, setFormError) => {
  console.log("inside validt fom", initialInput);
  const isNameValid = initialInput.username.length > 4;
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    initialInput.email
  );
  const isPassWordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      initialInput.password
    );
  const isConfrimPassWord =
    initialInput.confirmPassword !== "" &&
    initialInput.confirmPassword === initialInput.password;

  if (!isNameValid) {
    setFormError({
      ...formError,
      nameError: "Name Must be 4 characters Long",
    });
  }
  if (!isEmailValid) {
    setFormError({
      ...formError,
      emailError: "Enter a Valid Email",
    });
  }

  if (!isPassWordValid) {
    setFormError({
      ...formError,
      passwordError:
        "Password Must contain atleast 8 characters, atleast one letter, special character and a number",
    });
  }

  if (!isConfrimPassWord) {
    setFormError({
      ...formError,
      confirmPasswordError: "Confirm Password Does not Match with Password",
    });
  }
  return isNameValid && isEmailValid && isPassWordValid && isConfrimPassWord;
};
