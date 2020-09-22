const list = async (signal) => {
  try {
    let response = await fetch('/api/user/customers/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const create = async (customer) => {
  try {
    let response = await fetch('/api/user/customers/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

//request a single user by id
const read = async (id, credentials, signal) => {
  try {
    let response = await fetch('/api/user/customer/' + id, {
      method: 'GET',
      signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (id, credentials, customer) => {
  try {
    let response = await fetch('/api/user/customer/' + id,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(customer),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (id, credentials) => {
  try {
    let response = await fetch('/api/user/customer/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};


export {
  list,
  create,
  read,
  update,
  remove,
}