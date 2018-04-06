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
      throw new Error(`Errored with status code ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};