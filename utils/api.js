export async function getProfileFromApi() {
  const response = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const profile = await response.json();
  return profile;
}
