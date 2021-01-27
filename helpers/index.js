export const formatDate = (date = '') => {
  if (!date) return false;
  const formattedDate = new Date(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(formattedDate);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(formattedDate);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(formattedDate);
  return `${day} ${month}, ${year}`;
}

export const sortByDate = (data = [], key = 'releasedate') => {
  if (!data.length) return false;
  let filteredData = [];
  if (key === 'releasedate') {
    filteredData = data?.filter((movie) => new Date(movie[key]) > new Date());
    return filteredData?.sort((a, b) => (new Date(a[key]) > new Date(b[key])) ? 1 : ((new Date(b[key]) > new Date(a[key])) ? -1 : 0));
  } else {
    filteredData = data;
    return filteredData?.sort((a, b) => (new Date(a[key]) < new Date(b[key])) ? 1 : ((new Date(b[key]) < new Date(a[key])) ? -1 : 0));
  }
}