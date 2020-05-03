import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
        headers.append('Access-Control-Allow-Headers', 'x-access-token ')
        headers.append('x-access-token', localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );

    /* let ok = null;
    return fetch(options.url, options)
    .then(response => {
        ok = response.ok;
        return response.json();
    })
    .then(json => {
        if (!ok) {
            return Promise.reject(json);
        }
        return json;
    }); */
};

export function getAllPolls(page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function createPoll(pollData) {
    return request({
        url: API_BASE_URL + "/polls",
        method: 'POST',
        body: JSON.stringify(pollData)         
    });
}

export function getRecord(id) {
    return request({
        url: API_BASE_URL + "/record/"+id,
        method: 'GET'
        /* body: JSON.stringify(pollData)          */
    });
}

export function uploadFiles(data) {
    console.log('before ent prom',data.get('galleryImage'), '---',data._boundary);
    const formData = new FormData();
    formData.append( 'galleryImage', data.get('galleryImage'));

    request({
            url: API_BASE_URL + "/files/awsupload",
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
            body: formData   
        })
}
/*
    console.log('before ent prom',data)
    return new Promise(function(resolve, reject) {
              console.log('inside prom',data);
        resolve(data);
    }).then((result) => {
        console.log("inside then",result);
        callback( request({
            url: API_BASE_URL + "/files/awsupload",
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${result._boundary}`,
            },
            body: result   
        }));
    });
*/

   /*  return request({
        url: API_BASE_URL + "/files/awsupload",
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
        body: data         
    }); 
}
*/
export function castVote(voteData) {
    return request({
        url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
        method: 'POST',
        body: JSON.stringify(voteData)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function uploadMultiple(loginRequest) {
    return request({
        url: API_BASE_URL + "/files/uploadMultiple",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/auth/verifysignup?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/auth/verifysignup?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
console.log("ACC",localStorage.getItem(ACCESS_TOKEN));
    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

export function getUserCreatedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function getUserVotedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/votes?page=" + page + "&size=" + size,
        method: 'GET'
    });
}