
import { apiUrl } from "./config";
import { ICard, ISmallCard } from "./types";

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
    authorization = localStorage.getItem("jwt") || "";
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

export function apiGetCards() {
  return _fetch<{ data: ICard[] }>({ url: 'cards?populate=*' })
}

export function apiGetSmallCards() {
  return _fetch<{ data: ISmallCard[] }>({ url: 'sim-cards?populate=*' })
}