const list = async (signal) => {
  try {
    let response = await fetch('/api/user/jobs/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const create = async (job) => {
  try {
    let response = await fetch('/api/user/jobs/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

//request a job user by id
const read = async (id, credentials, signal) => {
  try {
    let response = await fetch('/api/user/job/' + id, {
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

const update = async (id, credentials, job) => {
  try {
    let response = await fetch('/api/user/job/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(job),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (id, credentials) => {
  try {
    let response = await fetch('/api/user/job/' + id, {
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

