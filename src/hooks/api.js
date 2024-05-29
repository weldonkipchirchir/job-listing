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
            message: data.message,
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