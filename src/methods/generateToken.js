export default function GenerateToken() {
  let token = Math.random().toString(16).substr(2, 32);
  return token;
}
