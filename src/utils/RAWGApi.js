const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

function buildUrl(endpoint, params = {}) {
  const query = new URLSearchParams({ key: API_KEY, ...params });
  return `${BASE_URL}${endpoint}?${query}`;
}

export function getFeaturedGames() {
  const today = new Date();
  const SixMonthsAgo = new Date();
  SixMonthsAgo.setMonth(today.getMonth() - 6);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const dateRange = `${formatDate(SixMonthsAgo)},${formatDate(today)}`;

  const url = buildUrl('/games', {
    dates: dateRange,
    ordering: '-added',
    page_size: 8,
  });

  return fetch(url).then((res) => res.json());
}

export function getGameDetails(id) {
  const url = buildUrl(`/games/${id}`);
  return fetch(url).then((res) => res.json());
}

export function searchGames(query) {
  const url = buildUrl(`/games`,{search: query, page_size: 8});
  return fetch(url).then((res) => res.json()); 
}