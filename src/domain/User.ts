
export interface User {
  login: {
    username: String;
  }
  name: {
    title: string;
    first: string;
    last: string;
  }
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  }
  email: string;
  phone: string;
  picture: {
    large: string;
    thumbnail: string;
  }
}

