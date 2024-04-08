import { unstable_noStore } from "next/cache";
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
  unstable_noStore();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/catalogs/`,
      {
        cache: "no-store",
      }
    );
    const catalogs = await response.json();

    return catalogs;
  } catch (error) {
    return [];
  }
}
