export let token = "";
if (typeof window !== "undefined") {
  token = document.cookie.split("accessToken=")[1].split(";")[0];
}
