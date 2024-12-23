"use server";

const getData = async (
  BaseUrl: string,
  endpoint: string,
  init?: Omit<RequestInit, "method">
) => {
  try {
    const response = await fetch(`${BaseUrl}/${endpoint}`, {
      method: "GET",
      ...init,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return { error: error };
  }
};

export default getData;
