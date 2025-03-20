
import { apiUrl } from "./config";
import { ICard, ISmallCard, IUser } from "./types";

export interface IFetch {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: BodyInit | Record<string, unknown>;
}


function checkResponse<T>(res: Response): Promise<T> {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

function _fetch<T>({ url, method = "GET", headers, body }: IFetch): Promise<T> {
  let contentTypeHeader: string | undefined = undefined;
  let authorization = "";
  // Получаем токен авторизации перед каждым запросом
  if (typeof window !== "undefined") {
    authorization = `Bearer ${localStorage.getItem("jwt")}` || "";
  }

  // Устанавливаем заголовок Content-Type в зависимости от типа тела запроса
  if (body instanceof FormData) {
    // Если тело запроса - FormData, не устанавливаем Content-Type (будет установлен автоматически)
  } else if (body) {
    // Если тело запроса - не пустое и не FormData, устанавливаем Content-Type: application/json
    contentTypeHeader = "application/json";
  }

  // Объединяем заголовки с дополнительными заголовками и устанавливаем Content-Type при необходимости
  const mergedHeaders = {
    authorization,
    ...(contentTypeHeader ? { "Content-Type": contentTypeHeader } : {}),
    ...headers,
  };

  const requestBody: BodyInit =
    body instanceof FormData ? body : JSON.stringify(body);

  return fetch(`${apiUrl}/${url}`, {
    method,
    headers: mergedHeaders,
    body: requestBody,
  }).then(checkResponse<T>);
}

export function apiLogin(dto: { email: string, password: string }) {
  return _fetch<{ message: string, token: string, user: IUser }>({ url: 'login', body: dto, method: 'POST' })
}

export function apiGetUsers() {
  return _fetch<IUser[]>({ url: 'users' })
}

export function apiAddUser(dto: IUser) {
  return _fetch<{ message: string, user: IUser }>({ url: 'users', method: "POST", body: { ...dto } })
}

export function apiUpdateUser(id: number, dto: IUser) {
  return _fetch<{ message: string, user: IUser }>({ url: `users/${id}`, method: 'PATCH', body: { ...dto } })
}

export function apiDeleteUser(id: number) {
  return _fetch<{ message: string, user: IUser }>({ url: `users/${id}`, method: "DELETE" })
}

export function apiGetCards() {
  return _fetch<ICard[]>({ url: 'cards' })
}

export function apiPostCard(dto: ICard) {
  return _fetch<{ message: string, card: ICard }>({ url: 'cards', method: "POST", body: { ...dto } })
}

export function apiUpdateCard(id: number, dto: ICard) {
  return _fetch<{ message: string, card: ICard }>({ url: `cards/${id}`, method: "PATCH", body: { ...dto } })
}

export function apiDeleteCard(id: number) {
  return _fetch<{ message: string }>({ url: `cards/${id}`, method: 'DELETE' })
}

export function apiGetSmallCards() {
  return _fetch<{ cards: ISmallCard[] }>({ url: 'services' })
}

export function apiPostService(dto: ISmallCard) {
  return _fetch<{ message: string, card: ISmallCard }>({ url: 'services', method: 'POST', body: { ...dto } })
}

export function apiUpdateService(id: number, dto: ISmallCard) {
  return _fetch<{ message: string, card: ISmallCard }>({ url: `services/${id}`, method: 'PATCH', body: { ...dto } })
}

export function apiDeleteService(id:number) {
  return _fetch<{ message: string }>({ url: `services/${id}`, method: 'DELETE' })
}