export function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleString();
}

export function toArrayFromCSV(str) {
  if (!str) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}
