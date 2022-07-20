import axios, { AxiosResponse } from "axios";
import { ISignUp, IToken } from "./types";
import { IFormLogin } from "../components/login/config";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_API_BASE_URL;

export const api = Object.freeze({
  async signUp(user: ISignUp) {
    // const data = await axios.post<ISignUp, AxiosResponse<IToken>>(
    //   `${process.env.NEXT_APP_API_URL}/live/register`,
    //   user
    // );
    try {
      const data = await axios.post<ISignUp, AxiosResponse<IToken>>(
        "https://lab.lectrum.io/nextjs/api/live/register",
        user
      );

      document.cookie = `token=${data?.data?.data}`;
      return data;
    } catch (err: any) {
      console.log(err.message);
    }
  },

  async login(credentials: IFormLogin) {
    try {
      const data = await axios.post<IFormLogin, AxiosResponse<IToken>>(
        "https://lab.lectrum.io/nextjs/api/live/login",
        credentials
      );

      document.cookie = `token=${data?.data?.data}`;
      return data;
    } catch (err: any) {
      console.log(err.message);
    }
  },

  async getCourses() {
    const { data } = await axios.get(`${BASE_URL}/nextjs/courses`);

    return data;
  },

  async profile(token: string) {
    const { data } = await axios.get(`${BASE_URL}/live/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  },

  async getCourseById(id: string) {
    const { data } = await axios.get(`${BASE_URL}/nextjs/courses/${id}`);

    return data.data;
  },

  async updateViewCourseById(id: string) {
    await axios.put(`${BASE_URL}/nextjs/courses/${id}/views`);
  },

  async getTeacherCourses(token: string, page: number, limit: number) {
    const { data } = await axios.get(
      `${BASE_URL}/nextjs/teacher/courses?page=${page}&limit=${limit}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  },
  // login(credentials: IFormLogin) {
  //   const { email, password } = credentials;
  //   const data = axios.get<IFormLogin, AxiosResponse<IToken>>(
  //     `${process.env.REACT_APP_API_URL}/v2/todos/auth/login`,
  //     {
  //       headers: {
  //         Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
  //       },
  //     }
  //   );

  //   return data;
  // },

  //   logout(token: string) {
  //     const config: AuthHeader = {};
  //     if (token) {
  //       config.headers = {
  //         authorization: `Bearer ${token}`,
  //       };
  //     }

  //     const data = axios.get(
  //       `${process.env.REACT_APP_API_URL}/v2/todos/auth/logout`,
  //       config
  //     );

  //     return data;
  //   },
});
