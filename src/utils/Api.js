import Cookies from 'js-cookie';
import Config from './Config';

class Api {

  constructor() {
    // Create the basic user
    this.user = Object.assign({}, this.defaultUser);
  }

  defaultUser = {
    _id: null,
    token: null,
    username: null,
    thumbnail: null,
    firstName: null,
    dob: null
  };

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }

  authenticate(user) {
    Cookies.set("user", user);
    this.setUser(user);
  }

  signup(user) {
    console.log(user);
    return fetch(`${Config.host}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  login(user = {}) {
    return fetch(`${Config.host}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  logout() {
    Cookies.remove("user");
    this.setUser(Object.assign({}, this.defaultUser));
  }

  // Compulsory authentication on this route
  getProfile(profile = {}) {
    return new Promise((resolve, reject) => {
      if (this.isAuthenticated()) {
        return fetch(`${Config.host}/api/users/${profile._id}`, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
          .then(res => res.json())
          .then(json => {
            resolve(json);
          });
      }
      reject({
        error: "You must be authenticated"
      });
    });
  }


  //Récupérer le theme respiration
  getRespirationPage() {
    console.log(" getRespirationPage");
    const url = Config.host + `/api/themes/nameTheme/Respiration`
    console.log(" getRespirationPage", url);

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        if (data.succes === false) {
          return []
        }
        return data
      });
  }

  //Récupérer tous les exercices du theme respiration
  getExercises(id) {
    console.log('getExercises');
    const url = Config.host + `/api/games/allByTheme/${id}`
    console.log("Api#url", url);

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        if (data.succes === false) {
          return []
        }
        return data
      })
  }

  //Récupérer l'id d'un exercice 
  getExercise(idExercise) {
    console.log('getExercise', idExercise);
    const url = Config.host + `/api/games/id/${idExercise}`
    console.log("Api#url", url);

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('getExercise#data', data)
        if (data.succes === false) {
          return []
        }
        return data
      })
  }

  getTime(idUser) {
    const url = Config.host + `/api/statistics/all/idUser/${idUser}`
    console.log("gettime url", url);
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Api#idUser', data);
        if (data.succes === false) {
          return []
        }
        return data
      })
  }

  getMoodByDate(userId, date) {
    const url = Config.host + `/api/moods/getMood/${date}/userId/${userId}`
    console.log("gettime url", url);
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Api#getMoodByDate', data);
        if (data.succes === false) {
          return []
        }
        return data
      })
  }


  saveMood(moodObject) {
    const url = Config.host + '/api/moods/add';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(moodObject)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Api#saveMood data', data);
        if (data.succes === false) {
          return []
        }
        return data
      })
  }

  getQuestions(){
    const url = Config.host + `/api/questions/all`
    return fetch(url)
      .then(res => res.json())
      .then(data =>{
        console.log('Api#getQuestion data', data);
        if(data.success === false) {
          return []
        }
        return data
      })
  }

  saveDiary(userId, date, diaryObject){
    const url = Config.host + `/api/moods/update/${date}/idUser/${userId}`
    return fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(diaryObject)
    })
    .then(res => res.json())
    .then(data =>{
      console.log('Api#saveDiary data', data);
      if(data.success === false) {
        return []
      }
      return data
    })
  }


}

export default new Api();