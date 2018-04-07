export const addUser = async newUser => {
  try {
    const response = await fetch('/api/v1/users/new', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Errored adding user. Status code: ${response.status}.`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInUser = async user => {
  try {
    const response = await fetch('/api/v1/users/signIn', {
      method: 'POST',
      body: JSON.stringify({email: user.email, password: user.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Error occured during sign in. Status code: ${response.status}.`
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};