import { Catalog, Service } from "./definitions";

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    const services = await response.json();

    return services;
  } catch (error) {
    return [];
  }
}

export async function getCatalogs(): Promise<Catalog[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/catalogs/`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    const catalogs = await response.json();

    return catalogs;
  } catch (error) {
    return [];
  }
}
