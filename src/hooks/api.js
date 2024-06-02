export function getToken() {
    let token = localStorage.getItem("authToken");
    if (token && token.startsWith('"') && token.endsWith('"')) {
        token = token.slice(1, -1);
    }
    return token;
}
export async function loginUser(creds) {
    const res = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "post",
        body: JSON.stringify(creds)
    })
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.error,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function createUser(creds) {
    const res = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "post",
        body: JSON.stringify(creds)
    })
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.error,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getJobs() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getJobDetails(id) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getSponsoredJobs() {
    const res = await fetch(`http://localhost:8000/api/v1/jobs/sponsored`);
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function postBookmark(data) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/bookmarks/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "post",
        body: JSON.stringify(data)

    });
    const resData = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return resData
}

export async function deleteBookmark(id) {
    const token = getToken()
    const res = await fetch(`http://localhost:8000/api/v1/bookmarks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "DELETE"
    })

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function postApplication(data) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/applications/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "post",
        body: JSON.stringify(data)

    });
    const resData = await res.json()

    if (res.status != 201) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return resData
}


export async function getJobApplications() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/applications/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getBookmarks() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/bookmarks/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getAdminJobs() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/admin`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function updateJob(id, jobDetails) {
    const token = getToken()
    const res = await fetch(`http://localhost:8000/api/v1/jobs/admin/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  
        },
        method: "PUT",
        body: JSON.stringify(jobDetails)
    })

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function adminApplication() {
    const token = getToken()
    const res = await fetch(`http://localhost:8000/api/v1/applications/admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function updateApplication(id, jobDetails) {
    const token = getToken()
    const res = await fetch(`http://localhost:8000/api/v1/applications/admin/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(jobDetails)
    })

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function deleteJob(id) {
    const token = getToken()
    const res = await fetch(`http://localhost:8000/api/v1/jobs/admin/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "DELETE"
    })

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function postJob(data) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/create`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'  
      },
      method: "POST",
      body: JSON.stringify(data)
    });
  
    const resData = await res.json();
  
    if (res.status !== 201) {
      throw {
        message: resData.message,
        statusText: res.statusText,
        status: res.status
      }
    }
  
    return resData;
  }
  
export async function updateUser(data) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/users/settings`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'  
      },
      method: "PUT",
      body: JSON.stringify(data)
    });
  
    const resData = await res.json();
  
    if (res.status !== 201) {
      throw {
        message: resData.message,
        statusText: res.statusText,
        status: res.status
      }
    }
  
    return resData;
  }
  
  export async function getAdminInfo() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/applications/admin/info`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
  export async function getAdminLatestJobs() {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/admin/latest-jobs`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getBookmarkById(id) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/bookmarks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getSearch(query) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/jobs/search?${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getSearchAll(query) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/search?searchTerm=${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getSearchAdminJobs(query) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/jobs/admin-jobs?searchTerm=${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
export async function getSearchAdminApplications(query) {
    const token = getToken();
    const res = await fetch(`http://localhost:8000/api/v1/applications/admin/search?email=${query}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}